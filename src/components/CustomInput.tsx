import { ChangeEvent, Component, HTMLInputTypeAttribute } from "react";
import { Input, SpaceProps } from "@chakra-ui/react";

type CustomInputProps = SpaceProps & {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export class CustomInput extends Component<CustomInputProps> {
  render() {
    return (
      <Input
        size="lg"
        marginTop={"1.4rem"}
        borderRadius={"4px"}
        borderWidth={"1px"}
        borderColor="gray.500"
        color="whiteAlpha.700"
        fontSize={"1rem"}
        {...this.props}
      />
    );
  }
}
