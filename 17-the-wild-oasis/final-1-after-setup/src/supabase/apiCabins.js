import supabase from "./supabase"

export async function getCabins() {

    try {
        const { data, error } = await supabase
            .from('cabins')
            .select('*')

        if (error) throw new Error('something happen')

        return data

    } catch (err) {
        console.error(err)
    }

}