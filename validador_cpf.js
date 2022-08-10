export class CPF {
    constructor(cpf) {
        this.cpf = cpf.replace(/\D+/g, '');
        this._valido = this.validar();
        }

    validar() {
        if (this.cpf.length !== 11){
            return false;
        }

        switch(this.cpf){
            case '11111111111': return false; break;
            case '22222222222': return false; break;
            case '33333333333': return false; break;
            case '44444444444': return false; break;
            case '55555555555': return false; break;
            case '66666666666': return false; break;
            case '77777777777': return false; break;
            case '88888888888': return false; break;
            case '99999999999': return false; break;
            default: {
                let validate = this.cpf.slice(0, -2);
                validate = this.calc(validate);
                validate = 11 - (validate % 11);
                validate = this.nineConvert(validate);
                validate = `${this.cpf.slice(0, -2)}${validate}`;
                let validate2 = this.calc(validate);
                validate2 = 11 - (validate2 % 11);
                validate2 = this.nineConvert(validate2);
                validate2 = `${validate}${validate2}`;
                return validate2 === this.cpf;
            }
        }

    }

    calc (string){
        let cpf = Array.from(string);
        if (string.length === 9){
            let count = 10;
            let result = 0;
            cpf.forEach(e => {
                result += Number(count * e);
                count--
            })
            return result;
        }

        if (string.length === 10){
            let count = 11;
            let result = 0;
            cpf.forEach(e => {
                result += Number(count * e);
                count--
            })
            return result;
        }
    }

    nineConvert(value){
        if (value > 9){
            value = 0;
        }
        return value;
    }
}