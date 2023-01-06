import { Component, ChangeEvent } from "react";
import { Alert, Text, Flex, Heading } from "@chakra-ui/react";

import { CustomInput } from "../components/CustomInput";
import { CustomTealButton } from "../components/CustomTealButton";

type State = {
  firstNumber: number | null;
  secondNumber: number | null;
  sum: number | null;
};

const APP_TITLE = process.env.REACT_APP_TITLE;

export class Home extends Component<{}, State> {
  state: Readonly<State> = {
    firstNumber: null,
    secondNumber: null,
    sum: null,
  };

  onChangeFirstNumber(event: ChangeEvent<HTMLInputElement>) {
    const numericValue = Number(event.target.value);
    this.setState({ firstNumber: numericValue });
  }

  onChangeSecondNumber(event: ChangeEvent<HTMLInputElement>) {
    const numericValue = Number(event.target.value);
    this.setState({ secondNumber: numericValue });
  }

  sumNumbers() {
    const { firstNumber, secondNumber } = this.state;

    if (firstNumber !== null && secondNumber !== null) {
      this.setState({ sum: firstNumber + secondNumber });
    }
  }

  render() {
    const { firstNumber, secondNumber, sum } = this.state;
    const isButtonDisabled = firstNumber === null || secondNumber === null;

    return (
      <Flex
        background={"black"}
        height={"100vh"}
        width={"100%"}
        justify={"center"}
        alignItems={"center"}
      >
        <Flex flexDirection={"column"}>
          <Heading
            fontFamily={"arial"}
            fontSize={"2rem"}
            marginBottom={"1.4rem"}
            color="gray.500"
          >
            {APP_TITLE}
          </Heading>

          <CustomInput
            placeholder="Informe um número"
            marginTop={"1.4rem"}
            type="number"
            onChange={this.onChangeFirstNumber.bind(this)}
            value={String(firstNumber)}
          />

          <CustomInput
            placeholder="Informe outro número"
            marginTop={"2rem"}
            type="number"
            onChange={this.onChangeSecondNumber.bind(this)}
            value={String(secondNumber)}
          />

          <CustomTealButton
            disabled={isButtonDisabled}
            color="white"
            onClick={this.sumNumbers.bind(this)}
            label={sum === null ? "Somar" : "Refazer Soma"}
          />

          {sum !== null && (
            <Alert
              status="success"
              marginTop={"4rem"}
              justifyContent={"center"}
              alignItems={"center"}
              textAlign={"center"}
              variant="left-accent"
              fontFamily={"arial"}
            >
              <Text fontWeight={"bold"} color={"green.700"}>
                A soma total é {sum}
              </Text>
            </Alert>
          )}
        </Flex>
      </Flex>
    );
  }
}
