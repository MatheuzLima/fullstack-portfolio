import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  message: z.string().min(1, "Mensagem é obrigatória"),
});

type ContactInput = z.infer<typeof contactSchema>;

export function useContactForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (data: ContactInput) => {
    try {
      setIsLoading(true);
      const validated = contactSchema.parse(data);
      
      // For now, just log the data since there's no backend
      console.log("Contact form data:", validated);
      
      return { success: true };
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submit,
    isLoading,
  };
}
