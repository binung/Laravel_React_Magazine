import React, { useState, useRef } from "react";
import { useForm, usePage } from "@inertiajs/react";

import Base from "@/Layouts/Base";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";

export default function Category() {
    // const { categories } = usePage().props;

    const [show, setShow] = useState(false);
    const title = useRef();

    const {
        data,
        setData,
        post: store,
        processing,
        reset,
        errors,
    } = useForm({
        title: "",
        description: "",
    });

    const categoryADD = () => {
        setShow(true);
    };

    const closeModal = () => {
        setShow(false);

        reset();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        store(route("category.store"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => title.current.focus(),
            onFinish: () => reset(),
        });
    };

    return (
        <>
            <div className="font-sans overflow-x-auto mx-3 my-5">
                <DangerButton onClick={categoryADD} className="mb-2 py-3">
                    Create New Category
                </DangerButton>

                <table className="w-full min-w-full max-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100 whitespace-nowrap">
                        <tr>
                            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Keyword
                            </th>
                            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Description
                            </th>
                            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Created At
                            </th>
                            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
                        <tr>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                Business
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                sport, art, financial
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                Eveniet maiores perferendis officia veniam est
                                laborum, expedita fuga doloribus natus
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                2022-05-15
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                <button className="text-blue-600 mr-4">
                                    Edit
                                </button>
                                <button className="text-red-600">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                Business
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                sport, art, financial
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                Eveniet maiores perferendis officia veniam est
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                2022-05-15
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                <button className="text-blue-600 mr-4">
                                    Edit
                                </button>
                                <button className="text-red-600">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                Business
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                sport, art, financial
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                Eveniet maiores perferendis officia veniam est
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                2022-05-15
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                <button className="text-blue-600 mr-4">
                                    Edit
                                </button>
                                <button className="text-red-600">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                Business
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                sport, art, financial
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                Eveniet maiores perferendis officia veniam est
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                2022-05-15
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                <button className="text-blue-600 mr-4">
                                    Edit
                                </button>
                                <button className="text-red-600">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                Business
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                sport, art, financial
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                Eveniet maiores perferendis officia veniam est
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                2022-05-15
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                <button className="text-blue-600 mr-4">
                                    Edit
                                </button>
                                <button className="text-red-600">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Modal show={show} onClose={closeModal}>
                <form onSubmit={handleSubmit} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Are you sure you want to create new category?
                    </h2>
                    <div className="mt-4">
                        <InputLabel
                            htmlFor="title"
                            value="title"
                            className="sr-only"
                        />

                        <TextInput
                            id="title"
                            type="text"
                            name="title"
                            ref={title}
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="mt-1 w-full block"
                            isFocused
                            placeholder="title"
                        />

                        <InputError message={errors.title} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel
                            htmlFor="description"
                            value="description"
                            className="sr-only"
                        />

                        <TextInput
                            id="description"
                            type="text"
                            name="description"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            className="mt-1 w-full block"
                            placeholder="description"
                        />

                        <InputError message={errors.title} className="mt-2" />
                    </div>
                    <div className="mt-5 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            Save
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </>
    );
}

Category.layout = (page) => <Base children={page} title={"Category"} />;
