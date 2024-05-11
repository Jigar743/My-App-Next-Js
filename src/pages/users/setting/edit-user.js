import EditProfileForm from "@/client/components/Forms/EditProfileForm/EditProfileForm";
import Router from "next/router";

export default function EditMePage() {
  return (
    <>
      <EditProfileForm />
      <button type="button" onClick={() => Router.back(-1)}>
        Back
      </button>
    </>
  );
}
