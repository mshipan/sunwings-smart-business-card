import { QRCode } from "react-qrcode-logo";
import { useState } from "react";
import { HuePicker } from "react-color";
import { useForm } from "react-hook-form";

const EditQrCode = () => {
  const [qrData, setQRData] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fgColor, setFgColor] = useState("#000000");
  const [logo, setLogo] = useState(null);
  const { register, handleSubmit, setValue, watch } = useForm();

  const handleBgColorChange = (color) => {
    setValue("bgColor", color.hex);
    setBgColor(color.hex);
  };

  const handleFgColorChange = (color) => {
    setValue("fgColor", color.hex);
    setFgColor(color.hex);
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue("logo", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="h-screen">
      <h1 className="text_db_36 mb-3">Generate Qr Code</h1>
      <div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 items-start"
          >
            <div className="flex flex-col md:flex-row gap-20 w-full">
              <div className="flex flex-col gap-4 items-start">
                <div className="form-control">
                  <label htmlFor="qrData" className="mb-1">
                    Qr Code Data
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your QR Code data"
                    {...register("qrData")}
                    className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                  />
                </div>
                <div className="form-control">
                  <label className="mb-1">Choose Background color</label>
                  <HuePicker
                    color={bgColor}
                    onChangeComplete={(color) => handleBgColorChange(color)}
                  />
                </div>

                <div className="form-control">
                  <label className="mb-1">Choose Border color</label>
                  <HuePicker
                    color={fgColor}
                    onChangeComplete={(color) => handleFgColorChange(color)}
                  />
                </div>
                <button
                  type="submit"
                  className="ml-1 bg-[#ff7c15] px-3 py-1 hover:bg-white border-2 border-solid border-[#ff7c15] transition-all ease-in-out duration-300"
                >
                  Generate QR Code
                </button>
              </div>
              <div>
                <QRCode
                  value={watch("qrData")}
                  fgColor={fgColor}
                  bgColor={bgColor}
                  size={300}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditQrCode;
