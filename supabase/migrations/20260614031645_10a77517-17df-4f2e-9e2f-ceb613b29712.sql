CREATE TABLE public.quote_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  email_sent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.quote_requests TO anon, authenticated;
GRANT ALL ON public.quote_requests TO service_role;

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a quote request"
ON public.quote_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(name)) BETWEEN 1 AND 100
  AND length(trim(phone)) BETWEEN 1 AND 30
  AND length(trim(email)) BETWEEN 3 AND 255
  AND length(trim(service)) BETWEEN 1 AND 100
  AND length(trim(message)) BETWEEN 1 AND 2000
);