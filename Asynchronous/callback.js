// Callback adalah sebuah fungsi yang dieksekusi di dalam fungsi lain melalui parameter

function greeeting(name){
    console.log(`Halo ${name}, selamat datang di Skilvul`);
}

function introduction(firstName, lastName, callback){
    const fullName = `${firstName} ${lastName}`;

    callback(fullName);
}

introduction("Miftah", "Faris", greeeting);