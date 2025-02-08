const Page = () => {
  return (
    <div className="mt-6 space-y-2 text-gray-800">
      <p>
        <b>📞 Phone:</b> +31 62 521 27 30
      </p>
      <p>
        <b>📧 Email:</b>
        <a
          href="mailto:s.hakob@gmail.com"
          className="text-blue-600 hover:underline"
        >
          s.hakob@gmail.com
        </a>
      </p>
      <p>
        <b>📍 Address:</b> Den Haag, The Netherlands
      </p>
    </div>
  );
};
export default Page;
