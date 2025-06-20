export interface AuthUser {
  id: number;
  name: string;
  userName: string;
  role: string;
}

export interface AuthTenant {
  name: string;
  tenantId: string;
}

export interface AuthResponse {
  success: true;
  data: {
    accessToken: string;
    user: AuthUser;
    tenant: AuthTenant;
  };
}

export interface LoginCredentials {
  userName: string;
  password: string;
}
