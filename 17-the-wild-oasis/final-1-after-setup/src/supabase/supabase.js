import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qoydxrsjthgrhinpkyci.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFveWR4cnNqdGhncmhpbnBreWNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE5ODc2MjEsImV4cCI6MjAxNzU2MzYyMX0.7bmrKdYtHxpeBjq4p0lGhlUcVm64JgkSbJxum2s-2i8'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase