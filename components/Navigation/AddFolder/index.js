import { IconButton } from "@chakra-ui/button";
import { Button } from "@chakra-ui/button";
import { ButtonGroup } from "@chakra-ui/button";
import { FormLabel } from "@chakra-ui/form-control";
import { FormControl } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { PopoverTrigger } from "@chakra-ui/popover";
import { PopoverArrow } from "@chakra-ui/popover";
import { PopoverCloseButton } from "@chakra-ui/popover";
import { PopoverContent } from "@chakra-ui/popover";
import { Popover } from "@chakra-ui/popover";
import React from "react";
import FocusLock from "react-focus-lock";
import { FolderAddOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addfolder } from "../../../redux/Folder/folderSlice";

export default function AddFolder() {
    const dispatch = useDispatch();
    // 1. Create a text input component
    const TextInput = React.forwardRef((props, ref) => {
        return (
            <FormControl>
                <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
                <Input ref={ref} id={props.id} {...props} />
            </FormControl>
        );
    });

    // 2. Create the form
    const Form = ({ firstFieldRef, onCancel }) => {
        function handleSubmit() {
            dispatch(addfolder({ [firstFieldRef.current.value]: [] }));
            onCancel();
        }
        return (
            <Stack spacing={4}>
                <TextInput label="Folder Name" id="folder-name" ref={firstFieldRef} defaultValue="" />
                <ButtonGroup d="flex" justifyContent="flex-end">
                    <Button variant="outline" onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button colorScheme="teal" onClick={handleSubmit}>
                        Save
                    </Button>
                </ButtonGroup>
            </Stack>
        );
    };

    // 3. Create the Popover
    // Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click

    const { onOpen, onClose, isOpen } = useDisclosure();
    const firstFieldRef = React.useRef(null);

    return (
        <Popover isOpen={isOpen} initialFocusRef={firstFieldRef} onOpen={onOpen} onClose={onClose} placement="right" closeOnBlur={false}>
            <PopoverTrigger>
                <IconButton size="sm" icon={<FolderAddOutlined />} />
            </PopoverTrigger>
            <PopoverContent p={5}>
                <FocusLock returnFocus persistentFocus={false}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
                </FocusLock>
            </PopoverContent>
        </Popover>
    );
}
