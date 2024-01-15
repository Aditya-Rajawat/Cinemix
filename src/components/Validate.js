export const EmailValidate=(email)=>{
    const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    return isEmailValid;
};

export const PasswordValidate=(password)=>{
    const isPassValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,60}$/.test(password);
    return isPassValid;
}