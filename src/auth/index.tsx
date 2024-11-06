import { useState } from "react";
import {
    Flex,
    Box,
    Heading,
    Input,
    Button,
    Text,
} from "@chakra-ui/react";
import {
    FormControl,
    FormLabel
} from "@chakra-ui/form-control";


const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
    };

    return (
        <Flex height="100vh" align="center" justify="center" bg="gray.50">
            <Box
                p={8}
                maxWidth="400px"
                borderWidth={1}
                borderRadius="lg"
                boxShadow="lg"
                bg="white"
            >
                <Heading mb={6} textAlign="center">
                    {isLogin ? "Login" : "Sign Up"}
                </Heading>
                <form>
                    <FormControl id="email" mb={4}>
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" placeholder="Enter your email" />
                    </FormControl>
                    <FormControl id="password" mb={4}>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" placeholder="Enter your password" />
                    </FormControl>
                    {!isLogin && (
                        <FormControl id="confirm-password" mb={4}>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input type="password" placeholder="Confirm your password" />
                        </FormControl>
                    )}
                    <Button colorScheme="blue" width="full" mt={4} type="submit">
                        {isLogin ? "Login" : "Sign Up"}
                    </Button>
                </form>
                <Text mt={4} textAlign="center">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <Button
                        colorScheme="blue"
                        onClick={toggleAuthMode}
                    >
                        {isLogin ? "Sign Up" : "Login"}
                    </Button>
                </Text>
            </Box>
        </Flex>
    );
};

export default AuthPage;
