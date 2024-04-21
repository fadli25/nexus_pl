import { Button, Stack } from "@mui/material/";
import { Variant, Variants, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactNode, useState } from "react";
import log from "@/public/log.png";
import { toast } from "react-toastify";

type showLeftNavbar = {
  showLeftNavbar: boolean;
};

const notify = () => {
  toast.info("Coming Soon!", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export default function LeftNavbar({ showLeftNavbar }: any) {
  //   Profile Image
  const imageSrc =
    "https://media.discordapp.net/attachments/1085293900706627595/1216090924862406678/Frame_52351_1.png?ex=65ff1fee&is=65ecaaee&hm=7be1ea6efe7966eb223dea2bccd63a6302b1bc6bace1ab9c4af691f26ee5c9ec&=&format=webp&quality=lossless&width=781&height=642";
  const buttonClass = "rounded-full bg-[#FF2D2D] hover:bg-[#FF2D2D99] ";

  const menu = [
    {
      name: "Homepage",
      link: "/",
    },
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Projects",
      link: "/founder",
    },
    {
      name: "Jobs",
      link: "/freelance",
    },

    {
      name: "Payment",
      link: "/payment",
    },

    {
      name: "Support",
      link: "/support",
    },
  ];

  const tap: Variant = {
    scale: 0.89,
  };

  const router = useRouter();

  const path = router.asPath;
  console.log(path.slice(0, 4));
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.2 }}
      className={`fixed top-0 left-0 border-r border-white/20 h-full bg-[#0F0F0F] w-[60vw] md:w-[16vw] z-[9999]  ${
        !showLeftNavbar && "hidden md:block"
      } ${path.slice(0, 4) === "/lan" && "!hidden"}`}
    >
      {path === "/login" ? (
        <Stack className="gap-[6vw] md:gap-[4vw] items-center pt-[2vw]">
          <Image
            src={log}
            width={2000}
            height={2000}
            className="w-[30vw] md:w-[10vw]"
            alt=""
          />

          <div className="text-[4vw] md:text-[1.4vw] px-[10vw] md:px-[2.6vw] text-center">
            Welcome to Nexus,
            <br /> please setup your profile.
          </div>
        </Stack>
      ) : (
        <div className="flex flex-col justify-between min-h-[46vw] pt-[2vw] items-center gap-y-[1vw] text-[1vw] font-[500]">
          <div>
            <Image
              src={imageSrc}
              width={9000}
              height={9000}
              className="w-[30vw] h-[30vw] md:w-[10vw] mb-[2vw] md:h-[10vw] rounded-full object-cover object-center"
              alt="profile image"
              style={{
                border: "0.2vw #fff solid",
              }}
            />
          </div>
          <div className=" md:-mt-[7vw]">
            {menu.map((el, index) => (
              <MuiButton
                onClick={() =>
                  el.name === "Payment" ||
                  el.name === "Support" ||
                  el.name === "Dashboard"
                    ? notify()
                    : router.push(el.link)
                }
                className={` md:mb-[1.2vw] flex items-center gap-x-[3vw] md:gap-x-[0.4vw] ${
                  el.link.slice(0, 6) === router.asPath.slice(0, 6) &&
                  "!text-[#00ff47] !font-semibold !scale-105"
                }`}
              >
                <div className="text-[1.2vw]">
                  {el.link === "/" && (
                    <div className="-ml-[0.2vw]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  )}
                  {el.link === "/dashboard" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M10 6V0H18V6H10ZM0 10V0H8V10H0ZM10 18V8H18V18H10ZM0 18V12H8V18H0Z"
                        fill="white"
                      />
                    </svg>
                  )}
                  {el.link === "/founder" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                    >
                      <path
                        d="M19 4H13C12.7348 4 12.4804 4.10536 12.2929 4.29289C12.1054 4.48043 12 4.73478 12 5V8H10V1C10 0.734784 9.89464 0.48043 9.70711 0.292893C9.51957 0.105357 9.26522 0 9 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H19C19.2652 18 19.5196 17.8946 19.7071 17.7071C19.8946 17.5196 20 17.2652 20 17V5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4ZM6 3H8V5H6V3ZM4 13H2V11H4V13ZM4 9H2V7H4V9ZM4 5H2V3H4V5ZM8 13H6V11H8V13ZM8 9H6V7H8V9ZM17 13H15V11H17V13ZM17 9H15V7H17V9Z"
                        fill="white"
                      />
                    </svg>
                  )}
                  {el.link === "/freelance" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                    >
                      <path
                        d="M19.5347 3.78493C19.4833 3.68993 19.409 3.6078 19.3178 3.54525C19.2266 3.48269 19.1211 3.44147 19.01 3.42494C18.8989 3.40841 18.7852 3.41704 18.6782 3.45012C18.5713 3.48321 18.474 3.53982 18.3945 3.61534L15.6514 6.222C15.5168 6.34802 15.3353 6.41867 15.1463 6.41867C14.9572 6.41867 14.7758 6.34802 14.6411 6.222L13.4553 5.0942C13.389 5.03121 13.3363 4.95642 13.3004 4.8741C13.2645 4.79179 13.246 4.70356 13.246 4.61446C13.246 4.52536 13.2645 4.43714 13.3004 4.35482C13.3363 4.27251 13.389 4.19772 13.4553 4.13472L16.1867 1.54035C16.2686 1.4626 16.3294 1.36712 16.3638 1.26212C16.3982 1.15711 16.4052 1.04575 16.3842 0.937609C16.3632 0.82947 16.3148 0.727799 16.2432 0.641354C16.1717 0.55491 16.079 0.486283 15.9733 0.441384C13.9103 -0.43457 11.3351 0.0224861 9.71132 1.55307C8.33176 2.85386 7.92057 4.88645 8.58401 7.12976C8.61978 7.24938 8.61999 7.37608 8.58461 7.49581C8.54922 7.61555 8.47964 7.72364 8.38355 7.80813L0.950918 14.2548C0.661365 14.5017 0.427809 14.802 0.264499 15.1375C0.101188 15.4729 0.0115475 15.8364 0.00104391 16.2058C-0.00945974 16.5753 0.0593941 16.9428 0.203405 17.2862C0.347417 17.6295 0.563566 17.9413 0.838669 18.2027C1.11377 18.4641 1.44206 18.6695 1.80351 18.8064C2.16495 18.9433 2.55198 19.0089 2.94099 18.999C3.32999 18.9892 3.71281 18.9043 4.06609 18.7493C4.41938 18.5944 4.73572 18.3727 4.99583 18.0978L11.857 11.0236C11.9447 10.9336 12.0566 10.8679 12.1807 10.8338C12.3047 10.7996 12.4362 10.7983 12.5611 10.8299C13.2336 11.0049 13.9273 11.0957 14.6246 11.1C16.1158 11.1 17.4243 10.6416 18.3681 9.75847C20.116 8.12315 20.3826 5.34944 19.5347 3.78493ZM3.01311 17.6336C2.71907 17.6641 2.42232 17.6071 2.16381 17.4706C1.9053 17.3341 1.69778 17.1248 1.56988 16.8715C1.44198 16.6182 1.40002 16.3335 1.44978 16.0566C1.49954 15.7797 1.63857 15.5243 1.84769 15.3256C2.0568 15.127 2.32569 14.9949 2.61724 14.9475C2.90879 14.9001 3.20863 14.9399 3.47538 15.0613C3.74213 15.1826 3.96264 15.3796 4.10647 15.6251C4.2503 15.8705 4.31036 16.1523 4.27837 16.4316C4.24317 16.7388 4.09857 17.0255 3.86848 17.244C3.6384 17.4626 3.33663 17.6 3.01311 17.6336Z"
                        fill="white"
                      />
                    </svg>
                  )}
                  {el.link === "/payment" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20 7.35177C20 8.31722 19.7996 9.27322 19.4102 10.1652C19.0209 11.0571 18.4502 11.8676 17.7308 12.5503C17.0113 13.2329 16.1572 13.7745 15.2172 14.1439C14.2772 14.5134 13.2697 14.7035 12.2523 14.7035C11.2349 14.7035 10.2274 14.5134 9.28739 14.1439C8.34739 13.7745 7.49329 13.2329 6.77385 12.5503C6.05441 11.8676 5.48372 11.0571 5.09436 10.1652C4.70501 9.27322 4.50461 8.31722 4.50461 7.35177C4.50461 5.40196 5.32088 3.53201 6.77385 2.15328C8.22683 0.774559 10.1975 0 12.2523 0C14.3071 0 16.2778 0.774559 17.7308 2.15328C19.1837 3.53201 20 5.40196 20 7.35177ZM12.253 1.80028C12.5496 1.80028 12.834 1.91207 13.0437 2.11105C13.2534 2.31004 13.3713 2.57993 13.3713 2.86134V3.30982C13.7998 3.40677 14.1959 3.60399 14.5236 3.88348C14.8512 4.16297 15.0998 4.51584 15.2469 4.90991C15.3457 5.17537 15.3294 5.46723 15.2015 5.72127C15.0736 5.97531 14.8445 6.17073 14.5648 6.26453C14.285 6.35834 13.9774 6.34284 13.7097 6.22146C13.442 6.10008 13.236 5.88275 13.1372 5.61728C13.1096 5.54297 13.0583 5.47865 12.9905 5.43327C12.9226 5.38788 12.8415 5.36369 12.7585 5.36404H11.5836C11.525 5.36423 11.4686 5.38487 11.425 5.42202C11.3814 5.45917 11.3538 5.51023 11.3473 5.56548C11.3409 5.62073 11.3561 5.6763 11.39 5.7216C11.424 5.76689 11.4743 5.79875 11.5314 5.8111L13.3221 6.18177C13.9054 6.30334 14.428 6.60907 14.8045 7.04898C15.181 7.48888 15.3891 8.03696 15.3948 8.60363C15.4005 9.1703 15.2035 9.72206 14.8359 10.1687C14.4684 10.6154 13.952 10.9305 13.3713 11.0627V11.5112C13.3713 11.7926 13.2534 12.0624 13.0437 12.2614C12.834 12.4604 12.5496 12.5722 12.253 12.5722C11.9565 12.5722 11.6721 12.4604 11.4624 12.2614C11.2527 12.0624 11.1348 11.7926 11.1348 11.5112V11.0627C10.7065 10.9654 10.3105 10.768 9.98296 10.4886C9.6554 10.2091 9.40662 9.85646 9.25923 9.46259C9.21018 9.33123 9.18888 9.192 9.19654 9.05284C9.2042 8.91367 9.24068 8.7773 9.30388 8.65152C9.43152 8.39747 9.66028 8.20195 9.93985 8.10796C10.2194 8.01397 10.5269 8.02921 10.7946 8.15032C11.0623 8.27144 11.2684 8.48852 11.3674 8.75379C11.3951 8.82814 11.4464 8.89253 11.5142 8.93813C11.582 8.98372 11.663 9.00829 11.7461 9.00845H12.76C12.8583 9.00708 12.9527 8.97161 13.0253 8.90873C13.098 8.84585 13.1439 8.75991 13.1543 8.66713C13.1648 8.57434 13.1391 8.48114 13.0821 8.4051C13.0251 8.32906 12.9408 8.27545 12.845 8.25439L11.0543 7.88372C10.4961 7.76769 9.99741 7.47194 9.64287 7.04668C9.28833 6.62141 9.09979 6.09283 9.10928 5.55065C9.11876 5.00848 9.32567 4.48612 9.69489 4.07225C10.0641 3.65838 10.5729 3.3785 11.1348 3.28011V2.86134C11.1348 2.722 11.1638 2.58402 11.22 2.45529C11.2762 2.32655 11.3585 2.20958 11.4624 2.11105C11.5662 2.01252 11.6895 1.93437 11.8251 1.88104C11.9608 1.82772 12.1062 1.80028 12.253 1.80028ZM12.253 16.4713C12.7391 16.4713 13.2177 16.4373 13.6844 16.3708C12.9951 17.1512 12.1426 17.7871 11.1808 18.2384C10.2189 18.6897 9.16879 18.9465 8.0969 18.9925C7.025 19.0385 5.95473 18.8727 4.9539 18.5056C3.95307 18.1385 3.04352 17.5782 2.28289 16.86C1.52226 16.1419 0.927129 15.2817 0.535225 14.3339C0.143321 13.3861 -0.0368129 12.3713 0.00623862 11.354C0.0492902 10.3367 0.314589 9.33889 0.785321 8.42395C1.25605 7.509 1.92195 6.69682 2.74082 6.03888C2.54227 7.33393 2.63978 8.65436 3.02674 9.91048C3.4137 11.1666 4.08104 12.329 4.98342 13.3186C5.8858 14.3083 7.00209 15.1021 8.25646 15.6461C9.51083 16.1901 10.8739 16.4715 12.253 16.4713Z"
                        fill="white"
                      />
                    </svg>
                  )}
                  {el.link === "/support" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M11.95 18C12.3 18 12.596 17.879 12.838 17.637C13.08 17.395 13.2007 17.0993 13.2 16.75C13.2 16.4 13.0793 16.104 12.838 15.862C12.5967 15.62 12.3007 15.4993 11.95 15.5C11.6 15.5 11.3043 15.621 11.063 15.863C10.8217 16.105 10.7007 16.4007 10.7 16.75C10.7 17.1 10.821 17.396 11.063 17.638C11.305 17.88 11.6007 18.0007 11.95 18ZM11.05 14.15H12.9C12.9 13.6 12.9627 13.1667 13.088 12.85C13.2133 12.5333 13.5673 12.1 14.15 11.55C14.5833 11.1167 14.925 10.704 15.175 10.312C15.425 9.92 15.55 9.44933 15.55 8.9C15.55 7.96667 15.2083 7.25 14.525 6.75C13.8417 6.25 13.0333 6 12.1 6C11.15 6 10.3793 6.25 9.788 6.75C9.19667 7.25 8.784 7.85 8.55 8.55L10.2 9.2C10.2833 8.9 10.471 8.575 10.763 8.225C11.055 7.875 11.5007 7.7 12.1 7.7C12.6333 7.7 13.0333 7.846 13.3 8.138C13.5667 8.43 13.7 8.75067 13.7 9.1C13.7 9.43333 13.6 9.746 13.4 10.038C13.2 10.33 12.95 10.6007 12.65 10.85C11.9167 11.5 11.4667 11.9917 11.3 12.325C11.1333 12.6583 11.05 13.2667 11.05 14.15ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </div>
                {el.name}
              </MuiButton>
            ))}
          </div>
          <Button
            variant="contained"
            className="!normal-case !invisible !text-[4vw] md:!text-[1vw] !px-[5vw] md:!px-[2vw] !py-[0.8vw] md:!py-[0.6vw] !rounded-full !bg-[#FF2D2D] hover:!bg-[#FF2D2D99] !mt-[3vw] md:!mt-[1.4vw]"
          >
            Sign out
          </Button>
        </div>
      )}
    </motion.div>
  );
}

interface Button {
  children: ReactNode;
  onClick?: () => void;
  className: string;
}
export function MuiButton({ children, onClick, className }: Button) {
  return (
    <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.06 }}>
      <Button
        variant="text"
        onClick={onClick}
        sx={{
          fontSize: "1vw",
          color: "#fff",
          textTransform: "none",
          mb: "0.5vw",
          "&hover": {
            color: "#fff",
          },
          "@media (max-width:767px)": {
            fontSize: "4vw",
            mb: "3vw",
          },
        }}
        className={`${className}`}

        // whileTap={tap}
      >
        {children}
      </Button>
    </motion.div>
  );
}
