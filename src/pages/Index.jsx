import { Box, Container, VStack, HStack, Text, Image, Button, Flex, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">ElectroShop</Text>
        <HStack spacing={8}>
          <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>Laptops</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>Smartphones</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>Accessories</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <VStack spacing={4}>
          <Text fontSize="4xl" fontWeight="bold">Featured Product</Text>
          <Image src="https://via.placeholder.com/600x400" alt="Featured Product" borderRadius="md" />
          <Text fontSize="2xl">Amazing Laptop - $999.99</Text>
          <Button colorScheme="blue" size="lg">Shop Now</Button>
        </VStack>
      </Box>

      {/* Product Grid */}
      <Box as="section" py={10}>
        <Text fontSize="3xl" fontWeight="bold" mb={6} textAlign="center">Our Products</Text>
        <Flex wrap="wrap" justifyContent="center" spacing={4}>
          {Array.from({ length: 8 }).map((_, index) => (
            <Box key={index} bg="white" borderRadius="md" boxShadow="md" m={4} p={4} maxW="sm" textAlign="center">
              <Image src="https://via.placeholder.com/200" alt={`Product ${index + 1}`} mb={4} />
              <Text fontSize="xl" fontWeight="bold">Product {index + 1}</Text>
              <Text fontSize="lg" color="gray.600">$199.99</Text>
              <Button colorScheme="blue" mt={4}>Add to Cart</Button>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10} textAlign="center">
        <VStack spacing={4}>
          <Text fontSize="lg" fontWeight="bold">Contact Us</Text>
          <Text>Email: support@electroshop.com</Text>
          <Text>Phone: (123) 456-7890</Text>
          <HStack spacing={4}>
            <Link href="#" isExternal><FaFacebook size="24" /></Link>
            <Link href="#" isExternal><FaTwitter size="24" /></Link>
            <Link href="#" isExternal><FaInstagram size="24" /></Link>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;