import { useState } from "react";
import {
    Heading,
    Button,
    VStack, Flex, SimpleGrid, HStack, Stack, Icon, createListCollection, Input,
} from '@chakra-ui/react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {DashInput} from "@/components/shared/inputs/CustomInput.jsx";
import {userSchema} from "@/lib/validators.js";

import {IoDocumentTextOutline, IoSaveOutline} from "react-icons/io5";
import {LuAtSign, LuDownload, LuPhone, LuUserPen} from "react-icons/lu";
import {TablesUsu} from "@/pages/dashboard/admin/Usuarios/TablesUsu.jsx";


const UserForm = () => {
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        resolver: zodResolver(userSchema),
    });



    const onSubmit = async (data) => {
        setLoading(true);
        try {
            console.log(data);
        } catch (err) {
            setError("Ocurrió un error al iniciar sesión");
        } finally {
            setLoading(false);
        }
    };
    return(
        <Flex
            bg="bg.panel"
            as="form"
            direction="column"
            onSubmit={handleSubmit(onSubmit)}
            p={5}
            w="full"
            borderRadius="2xl" >
            <VStack gap={{base: 3, md:5}}>
                <SimpleGrid w="full" columns={["2", null, "4"]}  columnGap={{base: "12px", md:"30px", lg:"70px"}} rowGap={{base: 3, md:5}}>
                    {/* Nombre */}
                    <DashInput register={register} name="nombre" errors={errors} placeholder="Nombre" label="Nombre" icon={LuUserPen }/>
                    <DashInput icon={LuUserPen} register={register} name="apellidos" errors={errors} placeholder="Apellidos" label="Apellidos"/>
                    <DashInput icon={LuAtSign} register={register} name="email" errors={errors} placeholder="Correo" label="Correo Electronico"/>
                    <DashInput icon={LuPhone} register={register} name="phone" errors={errors} placeholder="Teléfono" label="Teléfono"/>
                    <DashInput
                        register={register}
                        name="rol"
                        errors={errors}
                        label="Rol"
                        type="select"
                        control={control}
                        placeholder="Seleccionar rol"
                        options={optionsForm}
                    />


                </SimpleGrid >
                <Stack w="full" direction="row" justifyContent={{base:"center", md:"end"}}>
                    <Button
                        type="submit"
                        colorPalette="green"
                        rounded="lg"
                        _active={{colorPalette:"gray"}}
                        isLoading={loading}
                    >
                        Nuevo
                        <Icon as={IoDocumentTextOutline} size="sm"/>
                    </Button>
                    <Button
                        type="submit"
                        variant="surface"
                        colorPalette="gray"
                        rounded="lg"

                        _active={{
                            colorPalette: "green",
                        }}
                        isLoading={loading}
                    >
                        Guardar
                        <Icon as={IoSaveOutline} size="sm"/>
                    </Button>
                </Stack>
            </VStack>
        </Flex>
    )
}
const optionsForm = createListCollection({
    items: [
        { label: "Editor", value: "editor" },
        { label: "Lector", value: "lector" },
    ],
})

const CompTable = () => {
    return(
        <Flex
            bg="bg.panel"
            direction="column"
            p={5}
            w="full"
            borderRadius="2xl"
        >
            <VStack gap={4}>
                <HStack justifyContent="space-between" w="full" p={4}>
                    <Heading size="3xl" fontWeight="bold" color="text.title">
                        Inventario de Sensores
                    </Heading>
                    <HStack spaceX={2}>
                        <Input placeholder="Buscar" colorPalette="red"/>
                        <Button rounded="lg" colorPalette="blue">
                            Descargar
                            <Icon as={LuDownload} size="sm"/>
                        </Button>
                    </HStack>
                </HStack>
                <TablesUsu/>
            </VStack>
        </Flex>
    )
}

export function UserAd () {

    return (
        <VStack w="full">
            <UserForm/>
            <CompTable/>
        </VStack>
    )
}
