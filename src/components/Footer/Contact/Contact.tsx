import { Store } from "@/app/store";
import { Input, TextArea } from "@/components/minimal";
import { sendEmail } from "@/services/email";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export interface ContactInterface {}

const Contact: React.FC<ContactInterface> = () => {
  const {
    title,
    form: {
      name: formName,
      email: formEmail,
      message: formMessage,
      submit,
      control,
    },
  } = useSelector((store: Store) => store.options.content.contact);
  const {
    error: { required, send },
    sending,
    sent,
  } = control;
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError(required);
      return;
    }
    setLoading(true);
    const res = await sendEmail({
      name,
      email,
      message,
    });
    setLoading(false);
    if (!res?.success) {
      setError(send);
      return;
    }
    setName("");
    setEmail("");
    setMessage("");
    setSuccess(true);
  };

  useEffect(() => {
    if (error && error !== "") setTimeout(() => setError(""), 3000);
  }, [error]);

  useEffect(() => {
    if (success) setTimeout(() => setSuccess(false), 3000);
  }, [success]);

  useEffect(() => {
    if (loading) {
      setError("");
      setSuccess(false);
    }
  }, [loading]);

  return (
    <div className="flex flex-col justify-center items-center w-80 mx-auto mb-12 md:mb-0 md:order-2">
      <h1 className="title mb-2">{title}</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-full px-12"
      >
        <Input
          type="text"
          name="name"
          value={name}
          label={formName}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          name="email"
          value={email}
          label={formEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextArea
          name="message"
          value={message}
          label={formMessage}
          onChange={(e) => setMessage(e.target.value)}
        />
        {error && error !== "" && (
          <p className="px-3 py-1 mt-5 rounded-xl text-light-200 dark:text-dark-shadow-200 text-center border-2 bg-secondary-100 border-secondary-200 dark:bg-dark-secondary-100 dark:border-dark-secondary-200">
            {error}
          </p>
        )}
        {loading && (
          <p className="mt-5 dark:text-dark-shadow-200 text-shadow-200 text-center">
            {sending}
          </p>
        )}
        {success && (
          <p className="px-3 py-1 mt-5 rounded-xl text-shadow-200 dark:text-dark-shadow-200 text-center border-2 shadow-sm bg-primary-100 border-primary-300 dark:bg-dark-primary-100 dark:border-dark-primary-300">
            {sent}
          </p>
        )}
        <button
          type="submit"
          className={`btn btn-primary mt-5 rounded-lg ${
            loading ? "cursor-wait" : ""
          }`}
          disabled={loading}
        >
          {submit}
        </button>
      </form>
    </div>
  );
};

export default Contact;
