<script>
    let show = false;
    export let slug = "";
</script>

<style>
    /*Custom CSS KeyFrame*/
    @-webkit-keyframes oli_anim {
        0% {
            height: 0px;
            border: 1px solid #f1f1f1;
            background: #f7c25e;
            padding: 0%;
        }
        25% {
            height: 25px;
            border: 1px solid #d8d8d8;
            background: #f9c054;
            padding: 0.25%;
        }
        50% {
            height: 50px;
            border: 1px solid #d8d8d8;
            background: #f7bc4d;
            padding: 0.5%;
        }
        100% {
            height: 100px;
            border: 1px solid #d8d8d8;
            background: #f4b43c;
            padding: 0.6%;
        }
    }

    @-moz-keyframes oli_anim {
        0% {
            height: 0px;
            border: 1px solid #f1f1f1;
            background: #f7c25e;
            padding: 0%;
        }
        25% {
            height: 25px;
            border: 1px solid #d8d8d8;
            background: #f9c054;
            padding: 0.25%;
        }
        50% {
            height: 50px;
            border: 1px solid #d8d8d8;
            background: #f7bc4d;
            padding: 0.5%;
        }
        100% {
            height: 100px;
            border: 1px solid #d8d8d8;
            background: #f4b43c;
            padding: 0.6%;
        }
    }

    @-ms-keyframes oli_anim {
        0% {
            height: 0px;
            border: 1px solid #f1f1f1;
            background: #f7c25e;
            padding: 0%;
        }
        25% {
            height: 25px;
            border: 1px solid #d8d8d8;
            background: #f9c054;
            padding: 0.25%;
        }
        50% {
            height: 50px;
            border: 1px solid #d8d8d8;
            background: #f7bc4d;
            padding: 0.5%;
        }
        100% {
            height: 100px;
            border: 1px solid #d8d8d8;
            background: #f4b43c;
            padding: 0.6%;
        }
    }

    @-o-keyframes oli_anim {
        0% {
            height: 0px;
            border: 1px solid #f1f1f1;
            background: #f7c25e;
            padding: 0%;
        }
        25% {
            height: 25px;
            border: 1px solid #d8d8d8;
            background: #f9c054;
            padding: 0.25%;
        }
        50% {
            height: 50px;
            border: 1px solid #d8d8d8;
            background: #f7bc4d;
            padding: 0.5%;
        }
        100% {
            height: 100px;
            border: 1px solid #d8d8d8;
            background: #f4b43c;
            padding: 0.6%;
        }
    }

    @keyframes oli_anim {
        0% {
            height: 0px;
            border: 1px solid #f1f1f1;
            background: #f7c25e;
            padding: 0%;
        }
        25% {
            height: 25px;
            border: 1px solid #d8d8d8;
            background: #f9c054;
            padding: 0.25%;
        }
        50% {
            height: 50px;
            border: 1px solid #d8d8d8;
            background: #f7bc4d;
            padding: 0.5%;
        }
        100% {
            height: 100px;
            border: 1px solid #d8d8d8;
            background: #f4b43c;
            padding: 0.6%;
        }
    }
    .oli-btn {
        font-size: 13px;
        position: fixed;
        
        margin-top: -2px;
        display: none;
    }

    button {
        padding: 7%;
        border: none;
        border: 1px solid #f4b43c;
        background: #f4b43c;
        color: black;
        border-radius: 2px;
        font-size: 0.8em;
        width: 88px;
        box-shadow: 0px 4px 3px -3px #eadada;
        cursor: pointer;
    }

    button:hover + div.oli-btn {
        display: block;
        box-shadow: 0px 0px 1px 2px #fbfbfb;
        background: #f4b43c;
        height: 100px;
        animation-name: oli_anim;
        animation-duration: 200ms;
        animation-timing-function: ease-in;
        padding: 0.6%;
        border: 1px solid #d8d8d8;
        width: 190px;
    }
</style>

<button>View Slug</button>
<div class="oli-btn">{slug}</div>
