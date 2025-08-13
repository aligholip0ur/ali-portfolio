"use client";
import { Share2 } from "lucide-react";
import Section from "./Section";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useSendEmailMutation } from "@/app/store/api";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
export default function Contact() {
    const t = useTranslations();
    const [sendEmail, { isLoading, isSuccess, isError }] = useSendEmailMutation();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        onSubmit: async (values, { resetForm }) => {
            console.log(values);

            try {
                await sendEmail(values).unwrap();
                console.log("Success");
                resetForm();
            } catch (err) {
                console.error("ارسال ناموفق:", err);
            }
        },
    })
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [isactive,setIsactive] = useState<boolean>(false)
    const contactmeessage = t.raw("contactMessage");
    useEffect(() => {
        if (isSuccess) {
            setShowSuccessMessage(true);

            const timer = setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [isSuccess]);
    return (
        <>
            <Section className="p-6 pt-[70px] md:pt-[60px] " id="contact">
                <Card className="!gap-0 md:!gap-5">
                    <CardHeader >
                        <CardTitle className="flex items-center gap-2 text-xl  font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-500">
                            <Share2 className=" text-gray-700 dark:text-gray-200" />
                            {t('contactme!')}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row">
                        {
                            !isactive &&<>
                              <motion.div 
                              key="button"
                              initial={{ opacity: 0, scale: 0.2 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.6, y: -60 }}
                              transition={{ duration: 0.7,delay:1 }}
                              className="flex-1/3 flex flex-col text-xl p-2 ">
                            <p className=" bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-500">
                          {contactmeessage[0]}
                          <br/>
                          {contactmeessage[1]}
                          <br/>
                          {contactmeessage[2]}
                          {contactmeessage[3]}
                            </p>
                            <Button onClick={()=>setIsactive(true)} className="flex justify-center items-center md:hidden mt-5">Let's Go</Button>
                        </motion.div>
                            </>
                        }
                  
                       {
                        isactive && <>
                        <motion.div
                         key="new-element"
                         initial={{ opacity: 0, y: 60 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: -40 }}
                         transition={{ duration: 0.8 }}>
                        <form onSubmit={formik.handleSubmit} className="flex-2/3 flex flex-col gap-4  ">
                             <div className="flex flex-col gap-2">
                                <Label>{t('username')}:</Label>
                                <Input
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    type="text"
                                    placeholder={t('yourname')}
                                    className="mt-1"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>{t('email')}:</Label>
                                <Input
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    type="email"
                                    placeholder={t('youremail')}
                                    className="mt-1"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>{t('note')}:</Label>
                                <Textarea
                                    name="message"
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    placeholder={t('yournote')}
                                    className="mt-1"
                                />
                            </div>
                            <div className="flex items-end justify-end">
                                <Button
                                    disabled={isLoading}
                                    type="submit"
                                    className={`cursor-pointer ${isSuccess ? "border-2 border-green-500" : ""}`}
                                >
                                    {isLoading ? "Sending..." : t('send')}
                                </Button>
                            </div>

                            {showSuccessMessage && (
                                <div className="flex rounded-2xl relative mt-4 items-end justify-end">
                                    <h4 className="text-green-800 absolute rounded-2xl bg-green-200 py-1 px-2 text-sm">
                                        Successfully Sent! :)
                                    </h4>
                                </div>
                            )}
                        </form>
                        </motion.div>
                       
                        
                        </>
                       }
                         <form onSubmit={formik.handleSubmit} className="flex-2/3 hidden md:flex flex-col gap-4  ">
                            <div className="flex flex-col gap-2">
                                <Label>{t('username')}:</Label>
                                <Input
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    type="text"
                                    placeholder={t('yourname')}
                                    className="mt-1"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>{t('email')}:</Label>
                                <Input
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    type="email"
                                    placeholder={t('youremail')}
                                    className="mt-1"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>{t('note')}:</Label>
                                <Textarea
                                    name="message"
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    placeholder={t('yournote')}
                                    className="mt-1"
                                />
                            </div>
                            <div className="flex items-end justify-end">
                                <Button
                                    disabled={isLoading}
                                    type="submit"
                                    className={`cursor-pointer ${isSuccess ? "border-2 border-green-500" : ""}`}
                                >
                                    {isLoading ? "Sending..." : t('send')}
                                </Button>
                            </div>

                            {showSuccessMessage && (
                                <div className="flex rounded-2xl relative mt-4 items-end justify-end">
                                    <h4 className="text-green-800 absolute rounded-2xl bg-green-200 py-1 px-2 text-sm">
                                        Successfully Sent! :)
                                    </h4>
                                </div>
                            )}
                        </form>
                       
                    </CardContent>
                </Card>

            </Section>
        </>
    )
}