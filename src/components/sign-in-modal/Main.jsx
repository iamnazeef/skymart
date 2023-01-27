import { Box, Button, Link, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { signInContext } from "../../context/SignInModalContext";
import { useForm } from "react-hook-form";
import CloseIcon from "./icons/CloseIcon";

const Main = () => {
  const { isOpen, setIsOpen } = useContext(signInContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  //Close sign-in modal
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="sign-in-modal">
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{ "& .MuiTextField-root": { m: 1, width: "27ch" } }}
            noValidate
            autoComplete="off"
            className="border border-gray-200 shadow-sm p-3 rounded-md bg-white"
          >
            <div className="header flex items-center justify-between">
              <h1 className="font-semibold text-3xl my-3 text-center">
                Sign In
              </h1>
              <CloseIcon handleClose={handleClose} />
            </div>
            <div className="email-or-password flex flex-col">
              <TextField
                type="email"
                label="Email"
                {...register("email", {
                  required: "*Required",
                  pattern: {
                    value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                    message: "Email is not valid",
                  },
                })}
                error={!!errors?.email}
                helperText={errors?.email ? errors.email.message : null}
              />
              <TextField
                type="password"
                label="Password"
                {...register("password", {
                  required: "*Required",
                  minLength: {
                    value: 6,
                    message: "Require atleast 6 characters",
                  },
                  maxLength: {
                    value: 12,
                    message: "Maximum 12 characters only",
                  },
                })}
                error={!!errors?.password}
                helperText={errors?.password ? errors.password.message : null}
              />
            </div>
            <div className="log-in-and-forgot-password text-center mt-3">
              <Button
                type="submit"
                variant="contained"
                sx={{ width: "35ch", height: "6ch" }}
              >
                <p className="font-semibold text-lg">Log In</p>
              </Button>
              <Link>
                <p className="cursor-pointer mt-3 text-blue-700 font-sans">
                  Forgotten password?
                </p>
              </Link>
            </div>
            <div className="create-account text-center my-3">
              <Button
                variant="contained"
                sx={{
                  width: "30ch",
                  height: "6ch",
                  backgroundColor: "#3EB127",
                  ":hover": { backgroundColor: "#3EB127" },
                }}
              >
                <p className="font-meidum text-sm">Create new account</p>
              </Button>
            </div>
          </Box>
        </form>
      </Modal>
    </div>
  );
};

export default Main;
