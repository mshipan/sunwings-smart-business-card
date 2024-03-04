import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSendEmailMutation } from "../../redux/features/allApis/emailApi/userContactApi";

const UserContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const [sendEmail] = useSendEmailMutation();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const result = await sendEmail({ data: data });

      // Show toast based on response
      if (result.data) {
        reset();
        setLoading(false);
        toast.success("Message sent successfully.");
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      setLoading(false);
      toast.error(`An error occurred: ${error}`);
    }
  };

  return (
    <div className="my-6 mx-auto max-w-xl bg-white font-[sans-serif] mt-10">
      <h1 className="text-3xl text-[#ff7a00] font-extrabold text-center">
        যেকোনো প্রয়োজনে, যেকোনো সময় যোগাযোগ করতে পারেন
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          {...register("name")}
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          {...register("email")}
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500"
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          {...register("subject")}
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500"
        />
        <textarea
          placeholder="Message"
          name="message"
          {...register("message")}
          rows="6"
          className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-blue-500"
        ></textarea>
        <button
          type="submit"
          className="text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 w-full"
        >
          {loading ? (
            <div className="flex items-center justify-center gap-1">
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              <span>Sending...</span>
            </div>
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
};

export default UserContactForm;
