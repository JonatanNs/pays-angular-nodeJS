export const FORM_ERROR_MESSAGES: Record<string, Record<string, string>> = {

  username: {
    required: 'Le pseudo est requis.',
    minlength: 'Le pseudo doit contenir au moins 3 caractères.',
  },

  email: {
    required: "L'email est requis.",
    email: "Format d'email invalide.",
    exist: 'Cet email est déjà utilisé.',
  },

  password: {
    required: 'Le mot de passe est requis.',
    pattern:
      'Le mot de passe doit contenir au moins 10 caractères, avec une majuscule, une minuscule, un chiffre et un caractère spécial.',
  },

  confirmPassword: {
    required: 'La confirmation du mot de passe est requise.',
    passwordMismatch: 'Les mots de passe ne correspondent pas.',
  },
};
