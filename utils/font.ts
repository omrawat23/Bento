import { Rubik, Bricolage_Grotesque  } from '@next/font/google';

const rubik_init = Rubik({
  subsets: ['latin'],
  weight: ['300', '700', '900'],
  style: ['normal', 'italic'], 
  variable: '--font--rubik', 
});

const bric_init = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['300', '700', '800'],
  style: ['normal'], 
  variable: '--font--rubik', 
});

export const rubik = rubik_init.variable;
export const bric = bric_init.variable;