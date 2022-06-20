<template>
    <ul>
        <li><router-link :to="{name: 'Protected'}">Protected</router-link></li>
        <li><router-link :to="{name: 'Invoices'}">Invoices</router-link></li>
    </ul>
</template>
<style  scoped>
    ul{
        background: #fff;
        padding: 10px;
        margin-right: 20px;
        list-style-type: none;
    }
    li{
        margin:10px
    }
</style>