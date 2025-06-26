"use client";
import { StudentData } from "@/interfaces/student";
import { useGetServicesNameAndIdQuery } from "@/state/api";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

type FormProps = {
  onCreate: (formData: StudentData) => Promise<{ success: boolean; message: string }>;
};

const Alert = React.forwardRef<HTMLDivElement, any>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Form = ({ onCreate }: FormProps) => {
  const router = useRouter();
  const { data: services } = useGetServicesNameAndIdQuery();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    otherName: "",
    gender: "",
    email: "",
    phoneOne: "",
    phoneTwo: "",
    serviceId: "",
  });

  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await onCreate(formData);
      setSnackbar({
        open: true,
        message: result.message,
        severity: result.success ? "success" : "error",
      });

      if (result.success) {
        setFormData({
          firstName: "",
          lastName: "",
          otherName: "",
          gender: "",
          email: "",
          phoneOne: "",
          phoneTwo: "",
          serviceId: "",
        });
      }
    } catch {
      setSnackbar({
        open: true,
        message: "Something went wrong",
        severity: "error",
      });
    }
    setLoading(false);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <div className="w-full mt-2 flex flex-1">
      <div className="mt-4 ml-2 mr-4 flex-1 bg-white rounded-md p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Register New Student</h2>
          <button
            onClick={() => router.push("/students")}
            className="border border-[#302394] text-[#302394] rounded-md py-1 px-4 text-sm"
          >
            Back to Students
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name*</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-1 border border-gray-300 text-sm rounded w-full p-2"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name*</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-1 border border-gray-300 text-sm rounded w-full p-2"
                placeholder="Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Other Name*</label>
              <input
                name="otherName"
                value={formData.otherName}
                onChange={handleChange}
                required
                className="mt-1 border border-gray-300 text-sm rounded w-full p-2"
                placeholder="Michael"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender*</label>
              <input
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="mt-1 border border-gray-300 text-sm rounded w-full p-2"
                placeholder="Male"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 border border-gray-300 text-sm rounded w-full p-2"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Main Phone*</label>
              <input
                name="phoneOne"
                value={formData.phoneOne}
                onChange={handleChange}
                required
                className="mt-1 border border-gray-300 text-sm rounded w-full p-2"
                placeholder="+233xxx"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Second Phone</label>
              <input
                name="phoneTwo"
                value={formData.phoneTwo}
                onChange={handleChange}
                className="mt-1 border border-gray-300 text-sm rounded w-full p-2"
                placeholder="+233xxx"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Service Type*</label>
              <select
                name="serviceId"
                value={formData.serviceId}
                onChange={handleChange}
                required
                className="mt-1 border border-gray-300 text-sm rounded w-full p-2"
              >
                <option value="">Select Service</option>
                {services?.data?.map((s) => (
                  <option key={s.serviceId} value={s.serviceId}>
                    {s.serviceType}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-6 gap-2">
            <button
              type="submit"
              disabled={loading}
              className="w-36 flex items-center justify-center bg-[#302394] text-white text-sm rounded-md py-2"
            >
              {loading ? <CircularProgress size={20} color="inherit" /> : "Save & Continue"}
            </button>
          </div>
        </form>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert severity={snackbar.severity} onClose={handleCloseSnackbar}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Form;
