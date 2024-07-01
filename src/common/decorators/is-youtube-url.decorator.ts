import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsYoutubeUrl(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isYoutubeUrl',
      target: object.constructor,
      propertyName: propertyName,
      options: {
        ...validationOptions,
        message: 'Invalid URL provided, must be a valid YouTube URL',
      },
      validator: {
        validate(value: any) {
          const youtubeUrlRegex =
            /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
          return youtubeUrlRegex.test(value);
        },
      },
    });
  };
}
