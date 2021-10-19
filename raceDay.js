
let registerEarly = false;
let age= 18;
let raceNumberAdult = Math.floor(Math.random() * 1000);
let raceNumberYouth = Math.floor((Math.random() +1 )*1001);

if (age < 18)
{
    console.log(`you got race nuber ${raceNumberYouth} `);
}

else if (age > 18 && registerEarly )
{
    console.log(`you got race nuber ${raceNumberAdult}. you are early registered so you will run at 9:30`);

}
else if (age > 18 && !registerEarly )
{
    console.log(`you got race nuber ${raceNumberAdult}. you are late registered so you will run at 11:30`);
}
else
{
    console.log('see the registration desk');
}
