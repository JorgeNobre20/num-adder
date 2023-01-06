import { Component } from "react";
import { Button, SpaceProps } from "@chakra-ui/react";

type CustomButtonProps = SpaceProps & {
  label: string;
  background?: string;
  color: string;
  disabled: boolean;
  onClick: () => void;
};

export class CustomTealButton extends Component<CustomButtonProps> {
  render() {
    const { label, ...rest } = this.props;

    return (
      <Button
        colorScheme="teal"
        size="xs"
        marginTop={"2rem"}
        paddingY={"1.4rem"}
        fontSize={"0.9rem"}
        fontFamily={"arial"}
        {...rest}
      >
        {label}
      </Button>
    );
  }
}
