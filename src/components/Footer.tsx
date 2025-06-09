import { Film, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <div className="bg-[#4338CA] text-white py-10 px-5 flex gap-7 flex-col md:px-[80px] md:py-10 md:flex md:flex-row md:justify-between mt-8">
      <div className="">
        <h6 className="text-4 font-bold flex gap-2">
          <Film className="w-5 h-5" />
          <i>Movie Z</i>
        </h6>

        <p className="text-[14px] mt-3">
          © 2024 Movie Z. All Rights Reserved.
        </p>
      </div>

      <div className="flex justify-between text-[14px]  pb-[64px]">
        <div>
          <p>Contact Information</p>

          <div className="flex items-center pt-3 gap-3">
            <Mail className="w-4 h-4" />
            <div>
              <h6 className="font-semibold">Email:</h6>
              <p>support@movieZ.com</p>
            </div>
          </div>

          <div className="flex items-center pt-6 gap-3">
            <Phone className="w-4 h-4" />
            <div>
              <p className="font-semibold">Phone:</p>
              <p>+976 (11) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="mr-[51px] flex flex-col justify-around">
          <p>Follow us</p>
          <div className="md:flex md:gap-3">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Youtube</p>
          </div>
        </div>
      </div>
    </div>
  );
};