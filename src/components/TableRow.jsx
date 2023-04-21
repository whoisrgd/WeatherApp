import { Td, Tr } from "@chakra-ui/react";

export default function TableRow({ title, data, unit }) {
  return (
    <Tr>
      <Td fontSize="12px">{title}</Td>
      {data.map((d, i) => {
        return i ? (
          <Td key={i} fontSize="18px">
            {d} {unit}
          </Td>
        ) : null;
      })}
    </Tr>
  );
}
