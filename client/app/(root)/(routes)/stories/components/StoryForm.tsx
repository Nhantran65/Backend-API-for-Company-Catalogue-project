"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Separator } from "@/components/ui/separator";
 
  import { Input } from "@/components/ui/input";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { Textarea } from "@/components/ui/textarea";
  import { Button } from "@/components/ui/button";
  import { Axe, Wand2 } from "lucide-react";
  import { useToast } from "@/components/ui/use-toast";
  import { useRouter } from "next/navigation";
const StoryForm = () => {
  return (
    <div>
      
    </div>
  )
}

export default StoryForm
