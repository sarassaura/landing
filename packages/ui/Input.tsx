import { Input } from '@chakra-ui/react'

interface InputBoxProps {
  placeholder: string
}

export const InputBox: React.FC<InputBoxProps> = ({ placeholder }) => (
  <Input
    placeholder={placeholder}
    size="sm"
    variant="flushed"
    _placeholder={{ opacity: 1, color: '#696969' }}
    fontSize="18px"
    fontWeight={600}
    borderBottom="1px solid #696969"
    color="black"
  />
)
