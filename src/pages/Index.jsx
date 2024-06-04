import { useState } from "react";
import { Container, VStack, HStack, Button, Textarea, Box, IconButton, Input } from "@chakra-ui/react";
import { FaSquare, FaCircle, FaStar, FaTrash } from "react-icons/fa";

const Index = () => {
  const [shapes, setShapes] = useState([]);
  const [selectedShape, setSelectedShape] = useState(null);
  const [text, setText] = useState("");

  const addShape = (type) => {
    const newShape = { id: shapes.length, type, text: "" };
    setShapes([...shapes, newShape]);
  };

  const updateShapeText = (id, newText) => {
    setShapes(shapes.map((shape) => (shape.id === id ? { ...shape, text: newText } : shape)));
  };

  const deleteShape = (id) => {
    setShapes(shapes.filter((shape) => shape.id !== id));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack spacing={4}>
          <IconButton aria-label="Add Square" icon={<FaSquare />} onClick={() => addShape("square")} />
          <IconButton aria-label="Add Circle" icon={<FaCircle />} onClick={() => addShape("circle")} />
          <IconButton aria-label="Add Star" icon={<FaStar />} onClick={() => addShape("star")} />
        </HStack>
        <VStack spacing={4} width="100%">
          {shapes.map((shape) => (
            <Box key={shape.id} position="relative" width="100%">
              <Box width={shape.type === "square" || shape.type === "star" ? "100px" : "100px"} height={shape.type === "square" || shape.type === "star" ? "100px" : "100px"} borderRadius={shape.type === "circle" ? "50%" : "0"} border="1px solid black" display="flex" alignItems="center" justifyContent="center" margin="10px auto" clipPath={shape.type === "star" ? "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" : "none"}>
                <Textarea value={shape.text} onChange={(e) => updateShapeText(shape.id, e.target.value)} placeholder="Enter text" size="sm" resize="none" width="90%" height="90%" border="none" textAlign="center" />
              </Box>
              <IconButton aria-label="Delete Shape" icon={<FaTrash />} position="absolute" top="0" right="0" size="sm" onClick={() => deleteShape(shape.id)} />
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
