import { withTheme } from "styled-components"
import { bindCallback } from "rxjs"

export const specificBtnLStyleLogin = {
    btn: {
        width: '83px',
        height: '30px',
        right: '0px',
        marginTop: 'calc(50% - 34px/9)',

    },
    text: {
        marginLeft: '0',
        marginTop: '-3px',
    }
}
export const specificBtnStyleLogout = {
    btn: {
        border: 'none',
        width: '135px',
        marginLeft: '-20px',
        marginTop: '-8px',
        boxShadow: 'none',
        background:'none',
    },
    text: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '18px',
        color: 'black',
    }
}
export const specificBtnStyleAddRow = {
    btn: {
        width: '83px',
        height: '30px',
        marginLeft: '0',
        marginTop: '46px',
        border: 'none',
        boxShadow: 'none',
        background:'none',
    },
    text: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '12px',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        color: 'black',
    }
}
export const specificBtnStyleRemoveRecord = {
    btnContainer: {

    },
    btn: {
        width: '77px',
        height: '34px',
        marginTop: '0',
        marginBottom: '-12px',
        border: 'none',
        boxShadow: 'none',
        background:'none',
    },
    text: {
        color: 'black',
    }
}
export const regLink = {
    width: '150px',
    height: '21px',
    marginLeft: '40px',
    marginTop: '44px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    textDecoration: 'none',
    color: '#3D3D3D',
    flex: 'none',
    order: '0',
    alignself: 'flex-start',
}