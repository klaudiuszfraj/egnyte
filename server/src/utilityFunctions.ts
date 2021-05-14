import firestore from "./db";
import Form from "./models/form";

export const getAllFromDatabase = async () => {
    const forms = await firestore.collection('forms');
    const data = await forms.get();
    const formsArray:Form[] = []
    data.forEach(doc => {
        const form = new Form(
            doc.data().timestamp,
            doc.data().fields,
            doc.id,
        )
        if (formsArray){
        }
        formsArray.push(form);
    })
    return formsArray;
}
export const updateFormInDatabase = async (formId:string, update:Form) => {
    const form = await firestore.collection('forms').doc(formId);
    await form.set({
        timestamp: update.timestamp,
        fields: update.fields

    });
}