import { Td, Tr } from "@chakra-ui/react";

export default function TableRow({ title, data, unit, isDay }) {
  return (
    <Tr>
      <Td fontSize="12px" color={isDay ? "cyan.900" : "cyan.50"}>
        {title}
      </Td>
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
