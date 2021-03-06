import Head from "next/head";
import { useState } from "react";
import { Heading, Button, CodeBox, InputTextArea } from "../../../components";

import { Stack, Box, Text } from "@chakra-ui/react";

const Difffinder = () => {
  const [rightDataInput, setRightInput] = useState("");
  const [leftDataInput, setLeftInput] = useState("");
  const [missingValues, setMissingValues] = useState<string[][]>([]);

  const checkForDiffs = () => {
    setMissingValues([]);
    const arr1 = rightDataInput.split("\n");
    const arr2 = leftDataInput.split("\n");
    setMissingValues([
      arr1.filter((x) => !arr2.includes(x)),
      arr2.filter((x) => !arr1.includes(x)),
    ]);
  };

  return (
    <div className="container">
      <Head>
        <title>Diff finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading text="test" isTruncated={false} />

        <Stack
          direction={["column", "row"]}
          spacing="25%"
          style={{ marginLeft: "10%" }}
        >
          <Box>
            <InputTextArea
              placeHolder={"Paste data here..."}
              onChangeFunction={setLeftInput}
              width={300}
            />
            {missingValues[0]?.length > 0 && (
              <>
                <Text>The above list is missing below values</Text>
                <CodeBox
                  code={
                    <>
                      {missingValues[0].map((v, i) => (
                        <span key={i}>{v}</span>
                      ))}
                    </>
                  }
                />
              </>
            )}
          </Box>
          <Box>
            <InputTextArea
              placeHolder={"Paste data here..."}
              onChangeFunction={setRightInput}
              width={300}
            />
            {missingValues[1]?.length > 0 && (
              <>
                <Text>The above list is missing below values</Text>
                <CodeBox
                  code={
                    <>
                      {missingValues[1].map((v, i) => (
                        <span key={i}>{v}</span>
                      ))}
                    </>
                  }
                />
              </>
            )}
          </Box>
        </Stack>

        <Button
          onClickFunction={() => checkForDiffs()}
          title={"Format & Copy"}
          disabled={leftDataInput.length === 0 || rightDataInput.length === 0}
        />
      </main>
    </div>
  );
};

export default Difffinder;
