
import {
    ActionBar,
    Button,
    Checkbox, Flex, HStack,
    Badge,
    Portal,
    Table,
} from "@chakra-ui/react"
import { useState } from "react"
import {LuDelete, LuPenLine, LuTrash2} from "react-icons/lu";

export const TablesSe = () => {
    const [selection, setSelection] = useState([])

    const hasSelection = selection.length > 0

    const indeterminate = hasSelection && selection.length < items.length

    const rows = items.map((item) => (
        <Table.Row
            key={item.name}
            data-selected={selection.includes(item.name) ? "" : undefined}
        >
            <Table.Cell>
                <Checkbox.Root
                    size="sm"
                    top="0.5"
                    aria-label="Select row"
                    checked={selection.includes(item.name)}
                    onCheckedChange={(changes) => {
                        setSelection((prev) =>
                            changes.checked
                                ? [...prev, item.name]
                                : selection.filter((name) => name !== item.name),
                        )
                    }}
                >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                </Checkbox.Root>
            </Table.Cell>
            <Table.Cell>{item.id}</Table.Cell>
            <Table.Cell>{item.type}</Table.Cell>
            <Table.Cell>{item.parameter}</Table.Cell>
            <Table.Cell>{item.serie}</Table.Cell>
            <Table.Cell>{item.marca}</Table.Cell>
            <Table.Cell>{item.registro}</Table.Cell>
            <Table.Cell textAlign="center">{item.estado}</Table.Cell>
            <Table.Cell textAlign="center">{item.accion}</Table.Cell>
        </Table.Row>
    ))

    return (
        <>

            <Table.ScrollArea borderWidth="1px" maxW="full" height="md" rounded="md" w="full">
            <Table.Root size="sm" stickyHeader interactive>
                <Table.Header>
                    <Table.Row bg="bg.subtle">
                        <Table.ColumnHeader w="6">
                            <Checkbox.Root
                                size="sm"
                                top="0.5"
                                aria-label="Select all rows"
                                checked={indeterminate ? "indeterminate" : selection.length > 0}
                                onCheckedChange={(changes) => {
                                    setSelection(
                                        changes.checked ? items.map((item) => item.name) : [],
                                    )
                                }}
                            >
                                <Checkbox.HiddenInput />
                                <Checkbox.Control />
                            </Checkbox.Root>
                        </Table.ColumnHeader>
                        <Table.ColumnHeader minW="40px">ID</Table.ColumnHeader>
                        <Table.ColumnHeader minW="100px">Tipo</Table.ColumnHeader>
                        <Table.ColumnHeader minW="100px">Parámetro</Table.ColumnHeader>
                        <Table.ColumnHeader minW="100px">Serie</Table.ColumnHeader>
                        <Table.ColumnHeader minW="100px">Marca</Table.ColumnHeader>
                        <Table.ColumnHeader minW="100px">Registro</Table.ColumnHeader>
                        <Table.ColumnHeader minW="100px">Estado</Table.ColumnHeader>
                        <Table.ColumnHeader minW="50px">Accion</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>{rows}</Table.Body>
            </Table.Root>

            <ActionBar.Root open={hasSelection}  >
                <Portal>
                    <ActionBar.Positioner position="fixed" left={{base:"12%", md:"0"}} right="0%">
                        <ActionBar.Content bg="orange">
                            <ActionBar.SelectionTrigger outline="none" border="none">
                                {selection.length} Seleccionado
                            </ActionBar.SelectionTrigger>
                            <ActionBar.Separator />
                            <Button variant="outline" size="xs">
                                Eliminar <LuDelete/>
                            </Button>
                        </ActionBar.Content>
                    </ActionBar.Positioner>
                </Portal>
            </ActionBar.Root>
                </Table.ScrollArea>

        </>
    )
}

const items = [
    { id: 1, type: "T_P_SIN_POLVO", parameter: "Temperatura", serie: "XXXX XXXX", marca: "XXXX XXXX", registro: "2023-01-01", estado: <Badge colorPalette="green">Operativo</Badge>, accion: <HStack justifyContent="center"><LuPenLine color="gray" size={24}/><LuTrash2 color="red" size={24}/></HStack>},
    { id: 2, type: "T_M_SIN_POLVO", parameter: "Temperatura", serie: "XXXX XXXX", marca: "XXXX XXXX", registro: "2023-01-01", estado: <Badge colorPalette="gray">Inactivo</Badge>, accion: <HStack justifyContent="center"><LuPenLine color="gray" size={24}/><LuTrash2 color="red" size={24}/></HStack>},
    { id: 3, type: "T_M_CON_POLVO", parameter: "Temperatura", serie: "XXXX XXXX", marca: "XXXX XXXX", registro: "2023-01-01", estado: <Badge colorPalette="orange">Mantenimiento</Badge>, accion: <HStack justifyContent="center"><LuPenLine color="gray" size={24}/><LuTrash2 color="red" size={24}/></HStack>},
    { id: 4, type: "T_P_CON_POLVO", parameter: "Temperatura", serie: "XXXX XXXX", marca: "XXXX XXXX", registro: "2023-01-01", estado: <Badge colorPalette="green">Activo</Badge>, accion: <HStack justifyContent="center"><LuPenLine color="gray" size={24}/><LuTrash2 color="red" size={24}/></HStack>},
    { id: 5, type: "T_AMBIENTE", parameter: "Temperatura", serie: "XXXX XXXX", marca: "XXXX XXXX", registro: "2023-01-01", estado: <Badge colorPalette="green">Activo</Badge>, accion: <HStack justifyContent="center"><LuPenLine color="gray" size={24}/><LuTrash2 color="red" size={24}/></HStack>},
]
