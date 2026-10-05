import { useRef } from "react";

export default function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const focusInput = () => {
    emailRef.current?.focus();
  };

  const clearEmail = () => {
    if (emailRef.current) {
      emailRef.current.value = "";
    }
  };

  return (
    <>
      <input type="email" ref={emailRef} />
      <input type="password" ref={passwordRef} />

      <button onClick={focusInput}>focus email</button>
      <button onClick={clearEmail}>clear email</button>
    </>
  );
}
