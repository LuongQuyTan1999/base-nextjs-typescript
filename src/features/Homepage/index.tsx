import React from "react";

import { DefaultLayout } from "@/layouts";
import {
  Button,
  Checkbox,
  Input,
  InputPassword,
  InputPhoneNumber,
  Radio,
  SelectOption,
} from "@/components";

export const Homepage = () => {
  return (
    <DefaultLayout>
      <Button className="">Button</Button>
      <Button className="primary-white">Button</Button>
      <Button className="primary-outline-pink">Button</Button>
      <Button className="primary-outline-dark">Button</Button>
      <Button className="disabled">Button</Button>

      <Checkbox
        name="test"
        data={[{ label: "Se souvenir de moi", value: "" }]}
        id="1"
      />
      <Radio
        name="testRadio"
        data={[{ label: "Se souvenir de moi", value: "" }]}
      />
      <Input name="1" type="text" label="Input" />
      <InputPassword name="1" label="Input password" />
      <InputPhoneNumber name="phone" label="Input" />
      <SelectOption name="select" label="Select Option" />
    </DefaultLayout>
  );
};
