export const profileConfig = {
  contactEmail:
    import.meta.env.VITE_CONTACT_EMAIL ?? "jayeshgangurde315@gmail.com",
  resumeFile:
    import.meta.env.VITE_RESUME_FILE ?? "/Jayesh__Gangurde_Resume.pdf",
  baseUrl:
    import.meta.env.VITE_BASE_URL ?? "https://jayesh-gangurde.vercel.app",
} as const;
