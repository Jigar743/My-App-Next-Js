import { AuthContext } from "@/client/context/Auth/Auth";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import {
  ProfileWrapper,
  ProfileCard,
  SectionTitle,
  AvatarSection,
  Avatar,
  UploadBtn,
  FormGrid,
  Field,
  Input,
  Select,
  StatusBadge,
  Actions,
  Button,
  HeaderRow,
  StyledDatePicker,
  BackButton,
} from "./../../client/styles/EditProfile.styled";
import dayjs from "dayjs";

export default function EditMePage() {
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: currentUser.name,
    phoneNumber: currentUser.phoneNumber,
    gender: currentUser.gender,
    dateOfBirth: currentUser.dateOfBirth?.slice(0, 10),
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    console.log("Updated data:", form);
  };

  return (
    <ProfileWrapper>
      <ProfileCard>
        <HeaderRow>
          <BackButton onClick={() => router.back()}>← Back to Users</BackButton>

          <StatusBadge active={currentUser.active}>
            {currentUser.active ? "Active account" : "Inactive"}
          </StatusBadge>
        </HeaderRow>

        <SectionTitle style={{ marginTop: "16px" }}>Profile</SectionTitle>

        <AvatarSection>
          <Avatar>{currentUser.name?.charAt(0)}</Avatar>

          <UploadBtn>
            Change photo
            <input type="file" hidden />
          </UploadBtn>
        </AvatarSection>
      </ProfileCard>

      {/* Personal info */}
      <ProfileCard>
        <SectionTitle>Personal Information</SectionTitle>

        <FormGrid>
          <Field>
            <label>Name</label>
            <Input
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </Field>

          <Field>
            <label>Email</label>
            <Input value={currentUser.email} disabled />
          </Field>

          <Field>
            <label>Phone number</label>
            <Input
              value={form.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
            />
          </Field>

          <Field>
            <label>Gender</label>
            <Select
              value={form.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </Select>
          </Field>

          <Field>
            <label>Date of Birth</label>
            <StyledDatePicker
              value={form.dateOfBirth ? dayjs(form.dateOfBirth) : null}
              onChange={(date) =>
                handleChange("dateOfBirth", date ? date.toISOString() : null)
              }
              placeholder="Select date"
              format="DD MMM YYYY"
              disabledDate={(current) =>
                current && current > dayjs().endOf("day")
              }
            />
          </Field>
        </FormGrid>

        <Actions>
          <Button onClick={handleSave}>Save changes</Button>
          <Button secondary>Cancel</Button>
        </Actions>
      </ProfileCard>
    </ProfileWrapper>
  );
}
