import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Typography from "../atoms/typography";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type FormData = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  return (
    <div id="contact" className="w-full max-w-[100wv]">
      <div className="max-w-[1240px] m-auto px-4 py-4 w-full">
        <ContactHeader />
        <div className="grid lg:grid-cols-5 gap-8">
          <ContactLeft />
          <ContactRight />
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <BackToTopButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ContactHeader: React.FC = () => (
  <>
    <Typography className="text-xl tracking-widest uppercase text-[#ffffff]">
      Contact
    </Typography>
    <Typography className="py-4" size="text-s">
      Get In Touch
    </Typography>
  </>
);

const ContactLeft: React.FC = () => (
  <div className="col-span-3 lg:col-span-2 w-full h-full shadow-3xl rounded-xl p-4">
    <div className="lg:p-4 h-full">
      <ContactInfo />
      <ConnectWithUs />
    </div>
  </div>
);

const ContactRight: React.FC = () => (
  <div className="col-span-3 w-full h-auto shadow-3xl rounded-xl lg:p-4">
    <div className="p-4">
      <ContactForm />
    </div>
  </div>
);

const ContactInfo: React.FC = () => (
  <div>
    <Typography className="py-2">Semenov Volodymyr</Typography>
    <Typography className="py-4" size="text-s">
      Email us using our simple form and we&apos;ll respond within 10 working days.
    </Typography>
  </div>
);

const ConnectWithUs: React.FC = () => (
  <div>
    <p className="uppercase pt-8">Connect With Us</p>
    <div className="flex items-center justify-between py-4">
      <LinkedinIcon />
      <MailIcon />
      <ResumeLink />
    </div>
  </div>
);

const LinkedinIcon: React.FC = () => {
    const text = React.useRef(null);

    React.useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: 3,
                start: "0px bottom",
                end: "bottom+=100px bottom",
                toggleActions: 'restart pause none none'
            },
            x: -400,
            opacity: 0,
            rotation: 360,
            duration:3,
        })
    }, [])

    return (
        <div ref={text}>
            <a
                href="https://www.linkedin.com/in/volodymyr-semenov-872980224/"
                target="_blank"
                rel="noreferrer"
            >
                <div className="rounded-full shadow-3xl  bg-[#f3c600] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
                </div>
            </a>
        </div>

    );
}

const MailIcon: React.FC = () => {
    const text = React.useRef(null);

    React.useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: 3,
                start: "0px bottom",
                end: "bottom+=100px bottom",
                toggleActions: 'restart pause none none'
            },
            x: -400,
            opacity: 0,
            rotation: 720,
            duration:3,
        })
    }, [])
    return (
        <div ref={text}>
            <div className="rounded-full shadow-3xl  bg-[#f3c600] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
            </div>
        </div>
)};

const ResumeLink: React.FC = () => {
    const text = React.useRef(null);

    React.useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: 3,
                start: "0px bottom",
                end: "bottom+=100px bottom",
                toggleActions: 'restart pause none none'
            },
            x: -400,
            rotation: 920,
            opacity: 0,
            duration:3,
        })
    }, []);
    return (
        <div ref={text}>
            <div className="rounded-full shadow-3xl  bg-[#f3c600] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <BsFillPersonLinesFill />
            </div>
        </div>
)};

const ContactForm: React.FC = () => {
  const {
    register,
    trigger,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("~ data", data);
    const isValid = await trigger();
    if (!isValid) {
      return;
    }
    // Отримання даних та відправка форми
    // Наприклад, можна використовувати fetch або axios для відправки даних
  };

  return (
    <form
      target="_blank"
      onSubmit={handleSubmit(onSubmit)}
      action="https://formsubmit.co/93a3da623ad793b2e84d36c4508582eb"
      method="POST"
    >
      <ContactFormFields register={register} errors={errors} />
      <button
        className="w-full p-4 text-gray-700 mt-4 bg-[#f3c600] rounded-xl"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
};

const ContactFormFields: React.FC<{
  register: any;
  errors: any;
}> = ({ register, errors }) => (
  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
    <FormField
      label="Name"
      name="name"
      register={register}
      required={true}
      maxLength={100}
      errors={errors}
    />
    <FormField
      label="Phone Number"
      name="phone"
      register={register}
      required={true}
      pattern={/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/}
      errors={errors}
    />
    <FormField
      label="Email"
      name="email"
      register={register}
      required={true}
      pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
      errors={errors}
    />
    <FormField
      label="Subject"
      name="subject"
      register={register}
      required={true}
      maxLength={100}
      errors={errors}
    />
    <FormField
      label="Message"
      name="message"
      register={register}
      required={true}
      maxLength={2000}
      textarea={true}
      errors={errors}
    />
  </div>
);

const FormField: React.FC<{
  label: string;
  name: string;
  register: any;
  required: boolean;
  maxLength?: number;
  pattern?: RegExp;
  textarea?: boolean;
  errors: any;
}> = ({ label, name, register, required, maxLength, pattern, textarea, errors }) => (
  <div className="flex flex-col py-2">
    <Typography tag="label" className="uppercase text-sm py-2" size="text-xs">
      {label}
    </Typography>
    {textarea ? (
      <textarea
        className="border-2 rounded-lg p-3 border-gray-300"
        rows={10}
        {...register(name, { required, maxLength })}
      />
    ) : (
      <input
        className="border-2 rounded-lg p-3 flex border-gray-300"
        type={textarea ? "textarea" : "text"}
        {...register(name, { required, pattern, maxLength })}
      />
    )}
    {errors[name] && (
      <Typography className="text-red-500 mt-1" size="text-xs">
        {errors[name].type === "required" && "This field is required."}
        {errors[name].type === "pattern" && "Invalid input."}
        {errors[name].type === "maxLength" && `Max length is ${maxLength} char.`}
      </Typography>
    )}
  </div>
);

const BackToTopButton: React.FC = () => {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return (
        <div
            onClick={scrollToTop}
            className="rounded-full shadow-3xl p-4 cursor-pointer hover:scale-110 ease-in duration-300"
        >
                <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
        </div>
    )
};

export default Contact;
