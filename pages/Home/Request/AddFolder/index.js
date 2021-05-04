import { Button } from "@chakra-ui/button";
import { ButtonGroup } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Stack } from "@chakra-ui/layout";
import { PopoverTrigger } from "@chakra-ui/popover";
import { PopoverArrow } from "@chakra-ui/popover";
import { PopoverCloseButton } from "@chakra-ui/popover";
import { PopoverContent } from "@chakra-ui/popover";
import { Popover } from "@chakra-ui/popover";
import React, { useState } from "react";
import FocusLock from "react-focus-lock";
import { FolderAddOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
import { fetchToFolder } from "../../../../redux/request/requestSlice";
import { FormLabel } from "@chakra-ui/form-control";
// import { addfolder } from "../../../redux/Folder/folderSlice";
const { Option } = Select;

export default function AddFolder() {
    const dispatch = useDispatch();
    const folders = useSelector((state) => state.folders.data);
    console.log(folders);
    const [selectedOption, setSelectedOption] = useState("");
    // 2. Create the form
    const Form = ({ firstFieldRef, onCancel }) => {
        function onChange(value) {
            setSelectedOption(value);
        }
        function handleSubmit() {
            dispatch(fetchToFolder(selectedOption));
            onCancel();
        }
        return (
            <form>
                <Stack spacing={4}>
                    <FormLabel htmlFor="request name">
                        <b> Request Name</b>
                    </FormLabel>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        value={selectedOption}
                        onChange={onChange}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        {Object.entries(folders).map(([key, folder], i) => (
                            <Option value={key}>{key}</Option>
                        ))}
                    </Select>

                    <ButtonGroup d="flex" justifyContent="flex-end">
                        <Button variant="outline" onClick={onCancel}>
                            Cancel
                        </Button>
                        <Button type="submit" colorScheme="teal" onClick={handleSubmit}>
                            Save
                        </Button>
                    </ButtonGroup>
                </Stack>
            </form>
        );
    };

    // 3. Create the Popover
    // Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click

    const { onOpen, onClose, isOpen } = useDisclosure();
    const firstFieldRef = React.useRef(null);

    return (
        <Popover isOpen={isOpen} initialFocusRef={firstFieldRef} onOpen={onOpen} onClose={onClose} placement="top" closeOnBlur={false}>
            <PopoverTrigger>
                <Button leftIcon={<FolderAddOutlined />} colorScheme="teal" variant="outline">
                    Save Request
                </Button>
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
