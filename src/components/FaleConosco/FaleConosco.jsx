import React from 'react'
import Logo from "../../assets/logo.png"
import "./FaleConosco.css"

const FaleConosco = () => {
    return (
        <div className='container containerFaleConosco'>
            <div className='logoContainer logoContainerFaleConosco'>
                <img src={Logo} alt="Logo da empresa" />
                <h2>InterTicket</h2>
            </div>
            <div className='divInformacoes'>
                <h2 className='titulo tituloFaleConosco' style={{ color: "#9340FF" }}>Fale conosco</h2>
                <div>
                    <p>(12) 9 3456-7891</p>
                    <p>Rua Qualquer, 123, Cidade qualquer</p>
                    <p>ola@grandesite.com.br</p>
                </div>
                <div className='divRedesSociais'>
                    <a href="" title='LinkedIn' className='redeSocial'><img alt='Linkedin' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABS0lEQVR4nO2ZO0oEQRRFnyhmOoKmgoHuwD0oOI2GomBm6BZMZMCFuAYzx1EXYqb4YUB7IpMjJR01U3a1HXhreAcqu13F4dXr6o+Z4zh/AtgHRsCE/2cC3AJFW4lLdBm0qYQ6/RSRsJ3UGaaIlOjzmSKSBeYiM1aRZ+AQWK3GMfBKhiI7Krdr6yiyPCXfI0ORYkq+T4Yib8AJsFaN0CMvZCgig7nILFXEEq5JyDxUZ9E6sAgsAdvAOfCeg0g4OHcb1l4BrtVFNhsXt5/cAnAvK9IGYAP4khcB5hMyV7IiwBnwVEUfgdNfskeSIsBBm/dvYEtV5C4y7SiS76mKjCPTjiP5OVWRTvPWcZGAV8R8a0XxHgl4j5j3SBTvETWsyyNKbiIl+nykiIS/p+rcpIgU6LPXKFLJDNDlIkmi9pV9KNIzZdhOyZVwHMfqfANKiIQn/4RZwwAAAABJRU5ErkJggg==" /></a>
                    <a href="" title='Instagram' className='redeSocial'><img alt='Instagram' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsUlEQVR4nO2Zz04UQRCH54Be3ADe8WCE1cSLUfBgxIPgGfBVFH0BiHIUPfgnoO9ghMCyREx8BEXu60nFCAa9LB+pWBMnm0zPTPdAzSb7SybZw1R1f9vV1TVdUdRTT/YCLgIPgQ1gG/hNeRJf4rMBPJCxjgNgFGhy8voI3CgD4BTwDDjETofAU6DPF+IssEl11JQ5+ayERShl6QNwugiIhFNVtVhkY1vuiSzJ3K7lAaliSHWqkeecsNQ7YEiflYx3R1wgcthZaigxl3MZ7866QORU7RaQdRfITgmT+QEsAVMaqmf0kd/TwDKwm2K7ogDyrGaM88UFshcAcADMAf3OjfhvnAFgXm18tecawFetZEoE7gCv5F/TYjAuCF8Ckx2pXmy9FJUM0opjG6gDWzls3sdZRzNUyxrkIF4J4JYj9tP20rjajgF/LEHmEitRBCIJM6w+HluByCQG1C5POKVpU30MFv0zygJZSmzsUE2or9cWIFNqI9kpVC/U14wFSF1tJMWGatun1otKAqmpzT7h2ldftW4H+aW++rs9tD5bhta02kjZEarn6uuuBciy2kwSrtvq6431gSi1k6+aiQPxpwWIaF7tzgPfAkuUhaLGZYJIoTeqtuM6sbz6DtxU2+vWRWNnGT+c83ZSbmouqI18DX7FQ1HJIDHMWMLPhJQdklb1nJHnk2SneGMnVsILIgsk5FNXQuORbNrUAf6PM6h74u9xferuEK5drWKlALykZUdNf89oii2UnXwuH6yvg4pozQUinaJu0T0XyAjdo3rWRpT+YNW17oRQkCtAm+qqnautoDDSs6uqnuSCUJC+iobYVqHWW6IZWqWmz0aew9a1MovGrbi2hJN3e7oD6DLw1gCiAVwNBkg5Z2Yl/entehkXD7HElxSZa8B9Z2utp56iE9MRhEQQu0zJ/tkAAAAASUVORK5CYII=" /></a>
                    <a href="" title='Facebook' className='redeSocial'><img alt='Facebook' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+ElEQVR4nO3ZMS5EURTH4bMBkehMo7EXG9HrUNqEjj3o6CQjOqUpSGTUCgUNIj55oZ9nZt57Z6777eCXf3FycyOqfwhb2Mc5HvHqxzOe8IBb3OASh5EJ1nGKD3/zGVlgG3fmFBlgDZN5IxqRAY4tKIaGEd5KCNlbNKKRIeTMEsTQcL+EjnGGkObIzfL+eyBHkRW+WoQcRHba2YzstBCrQA1JRl2kZ7jWvXEfIX14KSVkUkrIRSkhJ6WEHJUSsltKyE4fIVcdR0yx0XlIi9CZYhWoIcmoiySjLpKMukgy6iLJqIskoy6SjLpIMuoiyZj9ph/+o7OK7n0DaHnpTc9J16kAAAAASUVORK5CYII=" /></a>
                    <a href="" title='Twitter' className='redeSocial'><img alt='Twitter' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4klEQVR4nO2ZO2hUQRSGr0ZR4wM1RvEREQO+UbEQIqhgERBEZImPxhRaRIRAxEobjbHToJWdBrQQRUgjKdRKkKhojCIIii/URnxkN/GZxycDf3Bclt25q7t3Nt6/2vw7c+Z+mZkzZ/YGQaxYsfIWMBM4DjwA+ii++oAuoMU8S74Q24EU/igF1OUDMYR/GnKG0XLyaSbSlQQqXUDMnvBdx1xAuvFfXS4gvfivlAtISSiIQf5UU45ZbcNdH4FF6tdY7Bn5DqzMEmMS8NQhzk9gk/psBvqLDWL0GBgPjAI6LH+n4qwDBnIcbvVquxzoiXKPnFCfOcAHeZ+B+fJNjZT1LABmA69Djsu/Bhm0lsY2y78OjAbGALcz9LusmZwA3AkLUQgQo7fAdPU9Z/kH5FWnnU13gXKBtucxXsFAjK6o70Rrk5uEsEr+Pnkvh8txoDXPsQoKYrRb/Wus7PPIJAT554Gl+tzwF+MUHMRknQWKcdTyT6XFrw2TZqMAMboJlGmTd1pptlaxp4RNs1GBGB1SnIXWveYdUCH/TKmA9ANrFWuv5bfLMxnrSSmAoActV7xL/NYeeWuAH5QAyCsrzc7Q0kLnSbX8w76DJIEVijXNylTDP2Z0KhmUKTl4CTIAbFGcDcAbYJb+Pm21OyKvCvjkI8h+xVhiPWCH6qpxwEMrIdSobb1vIK3qXwE8S/uuwSrXv8l7DkyWf9EXkKta8+Z+civD91+AxYp/0PLPypsatpQPCgByX8WiWT4XsrS7B4xV1XvD8ndYe2owKhCTVuc5XKLSL1NzrYuY2UtV8k9GAWLOhNXqs8vxt2LzH9+oPgnLv2YlhO5igpg0u1Xt1+vu4aoXpnjMMv4y4GuxQBqtwvA94dWW4xmaigUSuYL/CSSF/0q6gJj3hSPitUIL/qt5JLx66zF3nJwggqnz+GVowgkiDcZcknyaiUQoCAum0tRHKgyjeCXXq7GbnZdTrFixgkz6BSBAc4DKLHAwAAAAAElFTkSuQmCC" /></a>
                </div>
            </div>
        </div>
    )
}

export default FaleConosco