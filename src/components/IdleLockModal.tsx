"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Eye, EyeOff } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { useSignInMutation } from "@/state/api";
import { setAuthData } from "@/state";

type IdleLockModalProps = {
  open: boolean;
  onUnlock: () => void;
};

const IdleLockModal: React.FC<IdleLockModalProps> = ({ open, onUnlock }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();

  const userName = useAppSelector((state) => state.global.user?.userName);
  const [signIn, { isLoading }] = useSignInMutation();

  const handleUnlock = async () => {
    try {
      if (!userName) {
        setError("User not found. Please refresh and log in again.");
        return;
      }

      const result = await signIn({ userName, password }).unwrap();

      if (result.success) {
        dispatch(setAuthData(result.data));
        setPassword("");
        setError("");
        onUnlock();
      } else {
        setError(result.error || "Unlock failed");
      }
    } catch (err: any) {
      setError(err?.data?.error || "Incorrect password");
    }
  };

  return (
    <Dialog open={open} fullWidth maxWidth="xs">
      <DialogTitle>Session Locked</DialogTitle>
      <DialogContent>
        <Typography gutterBottom>
          You've been inactive. Please re-enter your password to continue.
        </Typography>

        <TextField
          fullWidth
          label="Username"
          value={userName || ""}
          margin="normal"
          disabled
        />

        <TextField
          fullWidth
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {error && (
          <Typography color="error" variant="body2" mt={1}>
            {error}
          </Typography>
        )}

        <Box mt={2}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleUnlock}
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : "Unlock"}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default IdleLockModal;
