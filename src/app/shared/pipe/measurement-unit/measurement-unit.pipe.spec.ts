import {MeasurementUnitPipe} from './measurement-unit.pipe';

describe('MeasurementUnitPipe', () => {

  const pipe = new MeasurementUnitPipe();

  it('should transform "Kb" to "Mb"', () => {
    expect(pipe.transform(45678, 'Kb', 'Mb')).toBe(45.678);
  });

  it('should transform "Kb" to "Gb"', () => {
    expect(pipe.transform(23849042, 'Kb', 'Gb')).toBe(23.849042);
  });

  it('should transform "Mb" to "Kb"', () => {
    expect(pipe.transform(1234, 'Mb', 'Kb')).toBe(1234000);
  });

  it('should transform "Mb" to "Gb"', () => {
    expect(pipe.transform(2321, 'Mb', 'Gb')).toBe(2.321);
  });

  it('should transform "Gb" to "Kb"', () => {
    expect(pipe.transform(0.34, 'Gb', 'Kb')).toBe(340000);
  });

  it('should transform "Gb" to "Mb"', () => {
    expect(pipe.transform(256.8, 'Gb', 'Mb')).toBe(256800);
  });
});
