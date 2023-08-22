$(()=>{
    console.log('works');
    $('#createNoteInputForm').on('submit', (e)=>{
        e.preventDefault();
        console.log(e);
        let data = {};
        data.title = e.currentTarget[0].value;
        console.log(data);
        $.post("/api/notes", data, ()=>console.log('ok'))
        .done(()=>{console.log('ok 2')})
        .fail(()=>{console.log('fail')})

    })
})