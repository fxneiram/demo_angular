/**
 * Dual Language Media DTO
 *
 * This interface represents the data structure for dual-language media upload.
 */

export interface DualLangMediaRequest {
  primaryName: string;
  primaryLang: string;
  secondaryName: string;
  secondaryLang: string;
  description: string;
  tags?: string[];
  base64file: string;
  fileExtension: string;
  fileName: string;
}

export namespace DualLangMediaRequest {
  export type LangEnum = 'en' | 'es' | 'ja'; //
  export const LangEnum = {
    EN: 'en' as LangEnum,
    ES: 'es' as LangEnum,
    FR: 'fr' as LangEnum,
    DE: 'de' as LangEnum
  };
}
