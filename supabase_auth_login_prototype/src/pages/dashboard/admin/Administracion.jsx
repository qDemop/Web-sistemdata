import { useState } from "react";
import {
    Box,
    Container,
    Heading,
    Text,
    Button,
    VStack, Flex, SimpleGrid, Wrap, HStack, Stack,
} from '@chakra-ui/react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {DashInput} from "@/components/shared/inputs/CustomInput.jsx";
import {adminsSchema} from "@/lib/validators.js";

import {LuUser} from "react-icons/lu";
import {LiaAtSolid, LiaIdCardSolid, LiaUserEditSolid} from "react-icons/lia";





const AdminsForm = () => {
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(adminsSchema),
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
            as="form" direction="column" onSubmit={handleSubmit(onSubmit)} p={5} w="full"  >
            <VStack gap={{base: 3, md:5}}>
            <SimpleGrid w="full" columns={["2", null, "4"]}  columnGap={{base: "12px", md:"30px", lg:"70px"}} rowGap={{base: 3, md:5}}>
                {/* Nombre */}
                <DashInput register={register} name="nombre" errors={errors} placeholder="Nombre" label="Nombre" icon={LiaUserEditSolid }/>
                <DashInput icon={LiaUserEditSolid } register={register} name="apellidos" errors={errors} placeholder="Apellidos" label="Apellidos"/>
                <DashInput icon={LiaIdCardSolid } register={register} name="dni" errors={errors} placeholder="DNI" label="DNI"/>
                <DashInput icon={LiaAtSolid } register={register} name="email" errors={errors} placeholder="Correo" label="Correo Electronico"/>
                <DashInput icon={LuUser} register={register} name="rol" errors={errors} placeholder="Seleccionar" label="Rol"/>
            </SimpleGrid >
                <Stack w="full" direction="row" justifyContent={{base:"center", md:"end"}}>
                    <Button type="submit"
                    colorPalette="green"
                    rounded="lg"
                    isLoading={loading}
                    >
                        Guardar
                    </Button>
                    <Button  type="submit"
                             variant="surface"
                            colorPalette="gray"
                            rounded="lg"
                            isLoading={loading}
                    >Guardar
                    </Button>
                </Stack>
            </VStack>
        </Flex>
    )
}

function Administracion () {

    return (
        <Flex w="full">
            <AdminsForm/>
        </Flex>
    )
}

export default Administracion