import React from "react";
import heroImgSrc from "../../../public/assets/promotor-family-image.jpg";
import styled from "styled-components";
import Image from "next/image";

const Picture = styled.picture`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
const Img = styled.img`
  position: relative;
  object-fit: cover;
  width: 100%;
  background-size: contain;
  background-image: url('data:image/jpeg;base64,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EgEQAoAIKEKqgq221AUICBAABAQAGZmY5c7rr23U58eHn8vnnTp03rPPGN+v1d3LGunXoUALmc430xw8k7en1a1nEtBLrWcw4cZ09WgAQKokSAiQotUCEQVUq1QFUAAAQQAAQQABJjOcznyzenXWpmZz5vPw561vWpF7demsccb9Ho77UQFnLlwm+vfWPNjfX1a1nOboEurnI4c3T0KAEDaiTMVYkkVS2qlEIC1FUAkUAAAgiBRSBAADGc4kknLjm71ZnJy48s01db107azy4c2vT6fR33pBBefl83mdfR6u18/N09O7MZu6BUizjzvTsAADQiZzLvVJJFpVohUAVUAgkzhrdACAISQC20QgEVUnPlkYYmOeOd6JjC4xiWL069d76Z58PPLO3p9Pq660IivP4fF5nf2ez0b4cpv0b3OeZvpQVks5YdOoAAjCCZxL06bqItKEkzld6UoEEIJz5YmuvTQQBIi2TOQLrVpEiNJIurOPDjnfRzmc3nzzelzz5zOUJeno7at1jnw5pjfb2+vtuqQk8vg+f5t9/d7fT05cca79NufOdN60BI1OWXTYAAjy5ipnGddem9aSXWtBMYzMTOum9a0RaggiZzy48nTr06aqJKJM5y1pnMi3K63q6SSSLpIurz83k4OvfXPnhrHNvtqceOMy6szr0ens54OfLE5y9/b7e+wsSZ8/h+d5enr9vs9G+fHDt03efNvWtVIitZ5S72AAQ+ZIumcS76burJdb6WLnnzxnOJenTrvbGWt2wQzjOMc8Yu+nXe6kysWzGMS2sxNXK62vSkZzdaIunHx+Dy9PR26c+crOG/RvPHz8Y6dtzG/R6eueHKTOOXKa6ej2+v0WASZ4eTw8d+n1+rrrHDLp00zJd21nOZrWrnlL00AAI+RIuqka6UkjXTpuxnHLnM5Xr169N544mum9FkmcYxjMtt300kklsu9XPPnnJZJNaa1q5nTpUsXWqFz5vF4vLe/brmas585rvvPLz8M66+nvZevp3y48sc2eebvfo9Xr72FLmTlw83O+j09qzxy3tDVtWZ5c2uutY5y9aAAE+NJbbdNasxmSS9OnXRnnywS769Om3LjzzrfTe9ZjGM4xm63vVqZxhdaau96csc8MpjLfTet6znO96NatF0s5+Xx+XzY327W3U5cc3rvPPhwzrv6vT1N97w48eXOpu7u+3r9N1atTGZnjjXXrTPLN1rGbeuwmPPyb79LjnnXaiKAg+NJVutb3ZzxiCb6b3ZnnjObrp167McueF1vptmJM4lu9aGccueLrp06bu+mpyzzxnOHPLffrves88Xdtu6zGrpz5efh5+PLHTv10k5cMt6cufPF6+n1+nS1w8/HnLvXTpM56ev1dNb1pbnnIktpc8s3V5Zuu3SknHzcHb09dcuc12oABD4oS9OulnPnlRrp03cc+WJN9O/bcxz54l1ZvVsLZlLsxJjHHnLvp26b6dN6xjOM5xic8t9vR11c88hdW5mbrdzz48ueefn89799s44cYtY55jfX1+vuzjHDz87prpemPPjt7vZ13vpRmZlAWccXd54dOvTRM+fy+a+r09tcuTXbQQAQ+KkNdetzMYyrVu+m+uePLjlenfv2nLlx5zp162Gk1rSZxNWc8TOOXPJvfTp06dems4kZxnOMy9e/fSZkzGrMpbvUxz5Ytx5fLjp36OfPlyy0zOci9PV6/ROWefn53W5LNc+E9Pv8AZ23vekkkUIlcct3PN06dNDHm8fDXp9fe8uTfa0iAEPmZxnF6ddufPJLbre+m955cOMuu3o775cOHLN69+3SSWXV0zz551qY5pz5YkLrXTp16dbC4zMzPOXr36bRnMq5hre2eXLnd7z5fJwnfbHLGMzTOM5GvR6ujGcc5enTPLGJjnv1+/wBnXW96kSVSJBxy3vEbvTQxw8XHXq9fVyxOnWhAEDxzGOeddNZ5YqS23W+nbpOXHkvTr26zjw4YuuvbvtIuoTPLlnfW5zjGOebYkjXTp16dNaM5zJy5ZvXv16KzlULrWnPz4b3c+XyefGtWZzMySYxka3301NTF6axy588SdfX7vZ1u9UihCQvHnd7Rq6ozx83PXf07csN9QEADnnOOWGpnnkkWrrp366xzzbrptz5ceTXTr267gszlJz5t9NZxjnzw3u5xnMW67devWyTMc+HHG+3f0dLZFSW2py5Yb3OfLz8OeILuYxzmMSLbuOnXcxNSZ54xb19Xt9XXWtaAgIlc+bXSraWM8+PPXbrucst9AEBQJjnjKcsZMxUzrr37dbkW5xy585rp169OixZjOVucS61nHPHPO+vTWOeMRmNdOvbe5MS44+flevfv366JUEXPPnzvTU5458sceWbvp1nHjxxjMFMXp36ZxIZzhrXX0+v09tXWqIEAY5zXW60yVM454103qcs3psQQVajNTOc3HPniSSEy6+n0ddEMcuXLK77dumrSM5zLqzMVjHPGXTr0vPnjNsxjN10301pmY5ceTfXt379aEki5zjm3akk5cOfO76dHn8vn55yQkzevXpiTKZy103v0en097daoQKBjkvXV0kDOM51vdzyzem0EEttpOdSTSY5csZySZzrr6PTrepJOfHjm3W+3bdoZzJaQjOMZymummMZatzy5YXXTe+lnPnyzV329HfdiZzhqTGJd61Qxy54Xe8+Tx+bmkiIjp01qpnOMN76b7ej099XWtIFFBjnL03azFMZyut6zxl6ahAFto5kS2Zxz588QmcXt379Lomcc+dt1vp01QZkLIymZhMstWoJc45881re99Nc+fOVNde3bpozjGbpMYt1vVokzmZTj5PJwzZMyS23WunTemMc+eW+uunf0d+mta0CqUGeUvTV1MwMzDd3cc83rYBCraMEgsmefLlnLMw69uu9b0iYmtVd70giCTOcsoTOcZut7tZxiZzNVHTWrjnjNq9evTW9M4xNas55ut1RLazy58eHm83JUzmTet6munXruYxjlzNa6du/fp13rRSlLFZ5R11Wc0TOOc6dd3HKa6VABVowsSRdZxz5c+eczON9uu99Omkku9I3ogESZxmTMt0zz5y76dNXPLlzhrpu5xd1y5Yzbrrve7rVmMt7uOa61YSS70zx48OHn82KuZlOvXesTp17bzJjnzzLrpvr16duu9VVBUpOMdNufKdOlk58eLp37Xnia6iIUpQixJAmefLlzxnnh17devfptIurFtsAJnMznODXTTHLnjW+nXTHDjma666dLnEszy5YW9OvXSrJNb1qcsze6iTEuulzy4+fzceOJDMt9HfbnzvXppCYzm63q66d+/TVUCiE5Zu+mePKb79Jnl5/POvq765Ya6pnMmrpM3VS0pIkyrPPny5cuPJ07+nt6OupEUttshQzMzOc5a30s5cMNdOm7nHLjm77dN6mYTHLGZdb6ddZIl3vbHPN3uySTGWuupz4efz8cYzmJL29Hfpnjyxre7bSRbqTXb09tqWBYE45u+meHHPT09Zjn5vNj0er0XlhvpjGS2sxvVK2pEmcy6Z5cscPN5529Pr7dumrlArVSLSJJJjEXemefPGtb3tjPPGNdOvXTMhM5zJbreqkSa301MYl3tEzM4a3qY48fPxxExnM36fR36Y4eblNb1vVoW6xyvT0d+m9UAITjh06uPDn19HVnHn446+jtrjhdc4tmVLrelrYCZzlq5xy58+Hnx09Pq9HTVpAWki0RIzjGY3bM4mtb1bnOc5vTfTSSSQgXQRGt7SYXVEkmYMznw8/JdufHlO/q9PdOHm4Yq6101bTV5cpv09tb3vdQATjym/Rrnzw69UzjGNdOl488XeVrEt0b6aLdAGcic8ZxjHPGu/fturcwtoSLQlZzjOJbdWLdWrmEXWqIzFrIUC2iRaCGc4zmTnw83PXTtrl5/PfX6vR0k48OHLOZve9XWta3nlyx17bb69emwhROHFvv0zjM30sM4lueOJvcmmc51vetbq2tQBJDHPliCXp06aVMZy1vRSKRaTMzIXWtUi1IpVAkUCABUmWraJExz54xnnx4c719PTl5uPX1+nuk4+fjlnNqtb6ddYxyvfcznv369KAWTjwb79LnMuq1ZjlzzjLXRlmSt9ulpbaoCESY5cs3WpL062pjnz5zXTfTVoSF0JJZLq2kFIWCgiKqIAEznM1reiyJM8uXHnnly5Y139G8cc+j1d9YY8/n5a1M5iZ106ddTOevq3jzcu/o77oCpOfLO+3S3Mi26nHz8ol3uYxGt767qrVNAAM4zjEtsa3rTPPlz551vr03rVGYtqwqKCkAICiSVRkoImMQ1veqSEzz48uWeXPLfXtc8+nq7azhx83l571pmTOb16dtl799+fzZ6+jrsBRMcprrrWpnMXW88OHIW3Oc3e+vTQtKrQKJUSTOYRrWqzjHPOW99N6tCS2hEKCgEIASDSzMjVJJMZi61vVWEJjny5YzGtdN45zv69454nDy+Tn067SI1069drrr2vm4TffrQKDPKOm7pnHPOunSceWGczOjW99OlFCrNhQBCRJFtskzJJd61VACJCqCgCEWEiLbWcZXVSZkzF301QAZxzxKt3qcebv6nPljHDzeeb6aTVa316dNaXW88eeOvbVIUCcsumtaZ4cOfXt3vPlzzjGbu9OmtatUANgUQAEFIIFpQIkQKoKCoQEiC2pnOWtGcxC66WwIUMyKtqeflevqceOMceXO9N1dW6106a1QzzzOm6AoM8st61q8/P58du/fXLhzxiOnXfTVq2kFE2BSARQAAFAJECBbQsBY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');
`;

const HeroImage = () => {
    return (
        <Picture>
            <source media="(max-width: 1000px)"
                    sizes="1px"
                    srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"/>
            <source media="(min-width: 1000px)"
                    srcSet={ heroImgSrc.src }/>
            <Img src={ heroImgSrc.src } alt="Rodzina ciesząca się zimowymi wakacjami"/>
        </Picture>

    );
};

export default HeroImage;